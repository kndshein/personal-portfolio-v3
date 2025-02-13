// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [react(), icon()],
  image: {
    domains: ['images.ctfassets.net'],
  },
});
