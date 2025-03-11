import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['subtle-toucan-nicely.ngrok-free.app']
  },
  plugins: [react()],
})
