// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // IDE ÍRD BE A SAJÁT WEBOLDALAD CÍMÉT (pl. https://bukailaci.hu)
  // Ez segít az Astrónak a pontos linkek legenerálásában.
  site: 'https://www.bukailaci.eu',

  vite: {
    plugins: [tailwindcss()]
  }
});