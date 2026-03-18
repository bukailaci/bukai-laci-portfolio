import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // FONTOS: Ide írd be a weboldalad végleges címét!
  // Enélkül az Astro nem tudja legenerálni a kanonikus URL-eket.
  site: 'https://bukailaci.eu',

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Ez biztosítja a Double Commander barát .html kimenetet
    format: 'file',
    assets: 'assets'
  }
});