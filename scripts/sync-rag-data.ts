import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import 'dotenv/config';

const STORE_NAME = 'nestor-portfolio-rag';
const RAG_DATA_DIR = path.join(process.cwd(), 'rag-data');
const MANIFEST_PATH = path.join(RAG_DATA_DIR, '.sync-manifest.json');

interface FileManifestEntry {
  hash: string;
  documentName: string;
  uploadedAt: string;
}

interface Manifest {
  storeId: string;
  files: Record<string, FileManifestEntry>;
}

function computeFileHash(filePath: string): string {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

function loadManifest(): Manifest {
  if (fs.existsSync(MANIFEST_PATH)) {
    const content = fs.readFileSync(MANIFEST_PATH, 'utf-8');
    return JSON.parse(content);
  }
  return { storeId: '', files: {} };
}

function saveManifest(manifest: Manifest): void {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function getLocalMdFiles(): string[] {
  if (!fs.existsSync(RAG_DATA_DIR)) {
    return [];
  }
  return fs
    .readdirSync(RAG_DATA_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(RAG_DATA_DIR, file));
}

async function findOrCreateStore(
  ai: GoogleGenAI
): Promise<{ name: string; displayName: string }> {
  // List existing stores to find one with our display name
  const pager = await ai.fileSearchStores.list({ config: { pageSize: 20 } });
  let page = pager.page;

  while (true) {
    for (const store of page) {
      if (store.displayName === STORE_NAME) {
        console.log(`Found existing store: ${store.name}`);
        return { name: store.name!, displayName: store.displayName! };
      }
    }
    if (!pager.hasNextPage()) break;
    page = await pager.nextPage();
  }

  // Create new store if not found
  console.log(`Creating new store: ${STORE_NAME}`);
  const newStore = await ai.fileSearchStores.create({
    config: { displayName: STORE_NAME },
  });
  console.log(`Created store: ${newStore.name}`);
  return { name: newStore.name!, displayName: STORE_NAME };
}

async function listStoreDocuments(
  ai: GoogleGenAI,
  storeName: string
): Promise<Map<string, string>> {
  const docs = new Map<string, string>(); // displayName -> documentName

  try {
    const pager = await ai.fileSearchStores.documents.list({
      parent: storeName,
    });
    let page = pager.page;

    while (true) {
      for (const doc of page) {
        if (doc.displayName && doc.name) {
          docs.set(doc.displayName, doc.name);
        }
      }
      if (!pager.hasNextPage()) break;
      page = await pager.nextPage();
    }
  } catch (error) {
    console.log('No existing documents or error listing documents');
  }

  return docs;
}

async function deleteDocument(
  ai: GoogleGenAI,
  documentName: string
): Promise<void> {
  try {
    await ai.fileSearchStores.documents.delete({
      name: documentName,
      config: { force: true },
    });
    console.log(`Deleted document: ${documentName}`);
  } catch (error) {
    console.error(`Failed to delete document ${documentName}:`, error);
  }
}

async function uploadFile(
  ai: GoogleGenAI,
  storeName: string,
  filePath: string
): Promise<string> {
  const fileName = path.basename(filePath);
  console.log(`Uploading ${fileName}...`);

  let operation = await ai.fileSearchStores.uploadToFileSearchStore({
    file: filePath,
    fileSearchStoreName: storeName,
    config: { displayName: fileName, mimeType: 'text/markdown' },
  });

  // Poll for completion
  while (!operation.done) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    operation = await ai.operations.get({ operation });
    process.stdout.write('.');
  }
  console.log(` Done!`);

  // Get the document name from the operation metadata
  // The document name is typically in the format: fileSearchStores/{store}/documents/{doc}
  const metadata = operation.metadata as { document?: string } | undefined;
  return metadata?.document || '';
}

async function main() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    console.error(
      'Error: GOOGLE_GENERATIVE_AI_API_KEY environment variable is not set'
    );
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  console.log('=== RAG Data Sync Script ===\n');

  // Load existing manifest
  const manifest = loadManifest();
  console.log(
    `Loaded manifest with ${Object.keys(manifest.files).length} files tracked\n`
  );

  // Get local files and compute hashes
  const localFiles = getLocalMdFiles();
  console.log(`Found ${localFiles.length} markdown files in rag-data/\n`);

  if (localFiles.length === 0) {
    console.log(
      'No markdown files to sync. Add .md files to rag-data/ folder.'
    );
    return;
  }

  const localFileHashes: Record<string, { path: string; hash: string }> = {};
  for (const filePath of localFiles) {
    const fileName = path.basename(filePath);
    localFileHashes[fileName] = {
      path: filePath,
      hash: computeFileHash(filePath),
    };
  }

  // Find or create the File Search Store
  const store = await findOrCreateStore(ai);
  manifest.storeId = store.name;

  // List existing documents in the store
  const storeDocuments = await listStoreDocuments(ai, store.name);
  console.log(`Store has ${storeDocuments.size} existing documents\n`);

  // Process each local file
  const newManifestFiles: Record<string, FileManifestEntry> = {};

  for (const [fileName, fileInfo] of Object.entries(localFileHashes)) {
    const existingEntry = manifest.files[fileName];

    if (existingEntry && existingEntry.hash === fileInfo.hash) {
      // File unchanged, keep existing entry
      console.log(`[SKIP] ${fileName} (unchanged)`);
      newManifestFiles[fileName] = existingEntry;
    } else if (existingEntry) {
      // File modified, delete old and upload new
      console.log(`[UPDATE] ${fileName} (modified)`);
      if (existingEntry.documentName) {
        await deleteDocument(ai, existingEntry.documentName);
      }
      const documentName = await uploadFile(ai, store.name, fileInfo.path);
      newManifestFiles[fileName] = {
        hash: fileInfo.hash,
        documentName,
        uploadedAt: new Date().toISOString(),
      };
    } else {
      // New file, upload
      console.log(`[NEW] ${fileName}`);
      const documentName = await uploadFile(ai, store.name, fileInfo.path);
      newManifestFiles[fileName] = {
        hash: fileInfo.hash,
        documentName,
        uploadedAt: new Date().toISOString(),
      };
    }
  }

  // Check for deleted files (in manifest but not in local)
  for (const [fileName, entry] of Object.entries(manifest.files)) {
    if (!localFileHashes[fileName]) {
      console.log(`[DELETE] ${fileName} (removed from rag-data/)`);
      if (entry.documentName) {
        await deleteDocument(ai, entry.documentName);
      }
    }
  }

  // Save updated manifest
  manifest.files = newManifestFiles;
  saveManifest(manifest);
  console.log(
    `\nManifest saved with ${
      Object.keys(newManifestFiles).length
    } files tracked`
  );

  console.log('\n=== Sync Complete ===');
  console.log(`Store ID: ${store.name}`);
}

main().catch((error) => {
  console.error('Sync failed:', error);
  process.exit(1);
});
