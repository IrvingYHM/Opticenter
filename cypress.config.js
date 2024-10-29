import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://opticenter-hu.vercel.app', // Cambia al puerto que estés usando
    setupNodeEvents(on, config) {
      // Implementa aquí los node event listeners si los necesitas
    },
  },
});
