/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Send Flowers", "cursive"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: "#e62305",
        green: "#203415",
      },
    },
  },
  plugins: [],
};
