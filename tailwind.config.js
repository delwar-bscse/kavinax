/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xll: "1320px"
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"]
      },
      colors: {
        bodyColor: "#F8FAFA",
        bgColor: "#FF5017",
        frontColor: "#010F58 "
      },
      boxShadow: {
        shadowOne: "1px 1px 10px #dcdede50, -1px -1px 8px #dcdede30",
      },
    }
  },
  plugins: [],
}