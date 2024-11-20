import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Cambia al puerto que estés usando
    setupNodeEvents(on, config) {
      // Implementa aquí los node event listeners si los necesitas
    },
  },
});
