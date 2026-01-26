import { fileURLToPath } from 'node:url';
import { createJiti } from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
jiti.esmResolve('./src/env.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev'],
  },
};

export default nextConfig;
