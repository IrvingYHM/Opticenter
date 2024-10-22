import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
/* import { createServer } from 'vite'; */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mi PWA',
        short_name: 'MiPWA',
        description: 'Descripción de mi PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/src/img/log.jpg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/img/caihqr.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
      },
    }),
  ],
/*   server: {
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
  }, */
})
