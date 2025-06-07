import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/blog-web-live",
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
})