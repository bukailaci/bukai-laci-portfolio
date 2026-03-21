import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // A kanonikus URL-ekhez szükséges
  site: 'https://bukailaci.eu',

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // EZ A KULCS: 'directory' módban újra mappákat fog gyártani,
    // pont úgy, ahogy a régi mentésedben volt!
    format: 'directory',
    assets: 'assets'
  }
});