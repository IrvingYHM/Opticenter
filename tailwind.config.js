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
      },
      spacing:{
/*         22:"88px", */
        "5/8":"38px",
      },
      translate: {
        90: "22.5rem",
      },
    },
  },
  plugins: [],
};
