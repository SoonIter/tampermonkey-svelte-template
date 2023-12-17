import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno, extractorSvelte } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['svelte', 'svelte/store', 'svelte/transition'],
      dts: './src/assets/types/auto-imports.d.ts',
    }),
    Unocss({
      // Place generated CSS for each Svelte component's utility styles directly into the Svelte component's <style> block instead of in a global CSS file.
      mode: "svelte-scoped",
      extractors: [extractorSvelte],
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
      ],
    }),
    svelte({
      emitCss: false,
    }),
  ],
  build: {
    lib: {
      name: 'Tampermonkey',
      fileName: 'Tampermonkey',
      entry: './src/main.ts',
      formats: ['iife'],
    },
  },
});
