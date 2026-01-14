import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import 'dotenv/config';

export const env = createEnv({
  server: {
    GOOGLE_GENERATIVE_AI_API_KEY: z.string().min(1),
    GOOGLE_FILE_SEARCH_STORE_ID: z.string().optional(),
  },
  client: {},
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    GOOGLE_FILE_SEARCH_STORE_ID: process.env.GOOGLE_FILE_SEARCH_STORE_ID,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
