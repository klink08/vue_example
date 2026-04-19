import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import magicalSvgPlugin from 'vite-plugin-magical-svg'

export default defineConfig({
  base: '/vue_example/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    magicalSvgPlugin({ target: 'vue' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
