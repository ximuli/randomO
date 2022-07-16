import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  css: {
    postcss: {
      plugins: [
        // https://github.com/postcss/autoprefixer
        require('autoprefixer')({})
      ]
    }
  },
  server: {
    host: '0.0.0.0',
    open: '/'
  }
})
