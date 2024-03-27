/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.985)",
        secondary: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
