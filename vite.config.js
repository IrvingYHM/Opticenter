import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Configura tu proxy si es necesario
    },
    middleware: createServer({
      // ... otras configuraciones
      server: {
        middlewareMode: true,
        // Configura una redirección 404 a tu página personalizada
        async render(ctx) {
          const { url } = ctx;
          if (!url.includes('.')) {
            // Redirige todas las rutas no coincidentes a la página de error 404
            ctx.url = '/404';
          }
        },
      },
    }),
  },
})
