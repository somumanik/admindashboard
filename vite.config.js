import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/home/',
  plugins: [react(),tailwindcss()],
})



// git add public/_redirects
// git commit -m "Add redirects for Netlify"
// git push
