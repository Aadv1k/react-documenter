import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'react-documenter',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'es',
      },
    },
  },
  publicDir: false,
})
