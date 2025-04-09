import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需要 @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
