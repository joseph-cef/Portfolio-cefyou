import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
    base: '/Portfolio-cefyou/', // مهم جداً

  plugins: [
           react(), 
           tailwindcss()],
           resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
           }

})
