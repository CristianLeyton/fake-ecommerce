import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://fireworks.com',
  output: "static",
  integrations: [
    tailwind(),
    sitemap(),
  ],

  vite: {
    build: {
      minify: 'esbuild',
    },
  },

  adapter: vercel({
    edgeMiddleware: true,
    revalidate: true
  }),
});