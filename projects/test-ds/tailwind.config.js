/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./projects/test-ds/src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
