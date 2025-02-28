// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

import dotenv from 'dotenv';
const env_file = process.env.NODE_ENV === 'development' ? '.development.env' : '.env';
dotenv.config({ path: env_file });

export default defineConfig({
  integrations: [react(), icon()],
  image: {
    domains: ['images.ctfassets.net'],
  },
});
