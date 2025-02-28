// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

import dotenv from 'dotenv';
const envFile = process.env.NODE_ENV === 'development' ? '.development.env' : '.env';
dotenv.config({ path: envFile });

export default defineConfig({
  integrations: [react(), icon()],
  image: {
    domains: ['images.ctfassets.net'],
  },
});
