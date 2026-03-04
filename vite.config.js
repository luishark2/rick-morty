import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                // Hace que test, expect, etc. estén disponibles globalmente
    environment: 'jsdom',         // Simula un navegador para pruebas de React
    setupFiles: './src/setupTests.js', // Archivo de configuración adicional
  },
});
