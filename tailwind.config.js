/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      colors: {
        mainBlue: "#1B7BD2",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Graphik: ["Graphik", "sans-serif"],
        ubuntu: ["ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
