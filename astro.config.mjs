import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fireworks.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    build: {
      minify: 'esbuild',
    },
  },
});
