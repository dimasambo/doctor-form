import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dimasambo.github.io/doctor-form",
  plugins: [react()],
})
