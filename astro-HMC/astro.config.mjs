// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig,fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://handmadebyclaire.com',
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [sanity({
    projectId: "o6hp51kg",
    dataset: "production",
    useCdn: false}), react(),
  sitemap()],

  fonts: [{
    provider: fontProviders.local(),
    name: "TRTempusSansITC",
    cssVariable: "--font-tempus",
    options: {
      variants: [{
        src: ['./public/TRTempusSansITC.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
    
});