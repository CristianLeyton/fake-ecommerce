import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  experimental: {
    contentCollectionCache: true,
    contentCollectionCache: {
      revalidate: 1 // Revalidar cada 1 segundo
    }
  }
});
