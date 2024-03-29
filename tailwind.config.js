/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#FFD099",
        turquesa: "#19BDFD",
        aRey: "#1446F5",
      },

      spacing: {
        22: "88px",
      },

      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
