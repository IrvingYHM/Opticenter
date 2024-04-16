/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#FFD099",
        turquesa: "#19BDFD",
        aRey: "#1446F5",
        azulOp: "#6786F6",
        turquesaOp: {
          50: "#E0F7FF", // Tonos más claros
          100: "#B3E7FF",
          200: "#80D7FF",
          300: "#4DC6FF",
          400: "#26B9FF",
          500: "#19BDFD", // Color base
          600: "#16A6E4",
          700: "#128FCB",
          800: "#0E78B1",
          900: "#0A5E93", // Tonos más oscuros
        },
      },
      spacing: {
        /*         22:"88px", */
        "5/8": "38px",
      },
      translate: {
        90: "22.5rem",
      },
    },
  },
  plugins: [],
};
