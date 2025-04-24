import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  experimental: {
    revalidate: 60 // Revalida cada 60 segundos
  }
});
