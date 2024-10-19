/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "mainColor":"#EEDCC6",
        "customBrown":"#604A3D",
        "customBlack":"#230C02",
        "customWhite":"#FFF5E9"
      }
    },
  },
  plugins: [],
}

