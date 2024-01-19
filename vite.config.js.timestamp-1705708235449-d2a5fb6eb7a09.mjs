// vite.config.js
import { defineConfig } from "file:///C:/Users/salaz/Desktop/OptiCenter/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/salaz/Desktop/OptiCenter/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createServer } from "file:///C:/Users/salaz/Desktop/OptiCenter/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000"
      // Configura tu proxy si es necesario
    },
    middleware: createServer({
      // ... otras configuraciones
      server: {
        middlewareMode: true,
        // Configura una redirección 404 a tu página personalizada
        async render(ctx) {
          const { url } = ctx;
          if (!url.includes(".")) {
            ctx.url = "/404";
          }
        }
      }
    })
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYWxhelxcXFxEZXNrdG9wXFxcXE9wdGlDZW50ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHNhbGF6XFxcXERlc2t0b3BcXFxcT3B0aUNlbnRlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvc2FsYXovRGVza3RvcC9PcHRpQ2VudGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gJ3ZpdGUnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJywgLy8gQ29uZmlndXJhIHR1IHByb3h5IHNpIGVzIG5lY2VzYXJpb1xuICAgIH0sXG4gICAgbWlkZGxld2FyZTogY3JlYXRlU2VydmVyKHtcbiAgICAgIC8vIC4uLiBvdHJhcyBjb25maWd1cmFjaW9uZXNcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBtaWRkbGV3YXJlTW9kZTogdHJ1ZSxcbiAgICAgICAgLy8gQ29uZmlndXJhIHVuYSByZWRpcmVjY2lcdTAwRjNuIDQwNCBhIHR1IHBcdTAwRTFnaW5hIHBlcnNvbmFsaXphZGFcbiAgICAgICAgYXN5bmMgcmVuZGVyKGN0eCkge1xuICAgICAgICAgIGNvbnN0IHsgdXJsIH0gPSBjdHg7XG4gICAgICAgICAgaWYgKCF1cmwuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdG9kYXMgbGFzIHJ1dGFzIG5vIGNvaW5jaWRlbnRlcyBhIGxhIHBcdTAwRTFnaW5hIGRlIGVycm9yIDQwNFxuICAgICAgICAgICAgY3R4LnVybCA9ICcvNDA0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsU0FBUyxvQkFBb0I7QUFDNVQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNWO0FBQUEsSUFDQSxZQUFZLGFBQWE7QUFBQTtBQUFBLE1BRXZCLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBO0FBQUEsUUFFaEIsTUFBTSxPQUFPLEtBQUs7QUFDaEIsZ0JBQU0sRUFBRSxJQUFJLElBQUk7QUFDaEIsY0FBSSxDQUFDLElBQUksU0FBUyxHQUFHLEdBQUc7QUFFdEIsZ0JBQUksTUFBTTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
