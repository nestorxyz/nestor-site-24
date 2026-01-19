import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages, UIMessage } from 'ai';
import * as fs from 'fs';
import * as path from 'path';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

interface Manifest {
  storeId: string;
  files: Record<string, unknown>;
}

function getFileSearchStoreId(): string | null {
  // First check environment variable (for production)
  if (process.env.GOOGLE_FILE_SEARCH_STORE_ID) {
    return process.env.GOOGLE_FILE_SEARCH_STORE_ID;
  }

  // Fall back to reading from manifest (for development)
  try {
    const manifestPath = path.join(
      process.cwd(),
      'rag-data',
      '.sync-manifest.json',
    );
    if (fs.existsSync(manifestPath)) {
      const manifest: Manifest = JSON.parse(
        fs.readFileSync(manifestPath, 'utf-8'),
      );
      if (manifest.storeId) {
        return manifest.storeId;
      }
    }
  } catch (error) {
    console.error('Failed to read manifest:', error);
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    console.log('Received messages:', messages);

    const storeId = getFileSearchStoreId();
    console.log('Store ID:', storeId);

    // Build tools config - only include file search if store exists
    const tools = storeId
      ? {
          file_search: google.tools.fileSearch({
            fileSearchStoreNames: [storeId],
          }),
        }
      : undefined;

    console.log('Starting stream with model: gemini-2.5-flash');

    const result = streamText({
      model: google('gemini-2.5-flash-lite'),
      messages: await convertToModelMessages(messages),
      system: `You are a helpful AI assistant for Nestor's portfolio website. Your role is to answer questions about Nestor's professional background, technical skills, projects, and career.

${
  storeId
    ? 'Use the file search tool to find relevant information from the knowledge base before answering questions. Base your responses on the information retrieved from the file search.'
    : 'Note: The knowledge base is not yet configured. Please answer based on general knowledge about software engineering.'
}

Guidelines:
- Be friendly, professional, and concise
- If asked about something not in the knowledge base, politely indicate that you don't have that specific information
- Provide helpful context when answering questions about skills or projects
- If someone wants to contact Nestor, guide them to the appropriate contact information from the knowledge base`,
      tools,
    });

    console.log('Stream started, returning response');

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
