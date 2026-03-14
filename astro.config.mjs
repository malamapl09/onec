// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://onec.org.do',

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: 'production',
      studioBasePath: '/admin',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
