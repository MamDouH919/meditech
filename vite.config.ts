import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "meditech", // Change output folder from 'dist' to 'build'
    minify: "terser", // Ensures minification
    sourcemap: false, // Disable source maps in production
  },
})
