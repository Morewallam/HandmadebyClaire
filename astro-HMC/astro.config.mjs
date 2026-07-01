// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig,fontProviders } from 'astro/config';


import sanity from '@sanity/astro';


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [sanity({
    projectId: "o6hp51kg",
    dataset: "production",
    useCdn: false}), react()],

  fonts: [{
    provider: fontProviders.local(),
    name: "TRTempusSansITC",
    cssVariable: "--font-tempus",
    options: {
      variants: [{
        src: ['./src/assets/TRTempusSansITC.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
    
});