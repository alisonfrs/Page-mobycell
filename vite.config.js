import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path para publicação no GitHub Pages (https://alisonfrs.github.io/Page-mobycell/).
  // Em deploy próprio (Vercel/Netlify/domínio raiz), troque para '/'.
  base: '/Page-mobycell/',
  plugins: [react()],
})
