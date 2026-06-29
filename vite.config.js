import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base do site:
  // - GitHub Pages (subpasta): definido via VITE_BASE=/Page-mobycell/ no workflow.
  // - Render / Vercel / domínio próprio (raiz): usa '/' (padrão).
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
