import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'/' is correct for a custom domain (kenjisakamoto.me)
  // Only change to '/repo-name/' if serving from a subdirectory without a custom domain
  base: '/',
})

