/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./projects/test-ds/src/**/*.{html,ts}",
    "./projects/jenga-ds/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary: {
        //   50: "#FFEDEC",
        //   100: "#FFDAD9",
        //   200: "#FFB3B3",
        //   300: "#FF888A",
        //   400: "#FF525F",
        //   500: "#E91B3F",
        //   600: "#BF002D",
        //   700: "#920020",
        //   800: "#680014",
        //   900: "#410009",
        // },
        primary: {
          50: "#efe9ff",
          100: "#d5c9fe",
          200: "#b8a5ff",
          300: "#997eff",
          400: "#7c60ff",
          500: "#7c60ff",
          600: "#4f3ef6",
          700: "#3736ed",
          800: "#0d30e7",
          900: "#0025d8",
        },
        secondary: {
          50: "#FFECF2",
          100: "#FFD8E8",
          200: "#FFAFD5",
          300: "#FF80C4",
          400: "#FE40B6",
          500: "#DC1B9A",
          600: "#B5007D",
          700: "#8A005E",
          800: "#620042",
          900: "#3D0027",
        },
        success: {
          50: "#E8FFEF",
          100: "#8CF7C3",
          200: "#6FDBA8",
          300: "#52BE8E",
          400: "#32A375",
          500: "#00885D",
          600: "#006C49",
          700: "#005236",
          800: "#003824",
          900: "#002113",
        },
        warning: {
          50: "#FFF8F2",
          100: "#FFDF9A",
          200: "#F0C048",
          300: "#D2A52E",
          400: "#B58B0E",
          500: "#967200",
          600: "#775A00",
          700: "#5A4300",
          800: "#3F2E00",
          900: "#251A00",
        },
      },
    },
  },
  plugins: [],
};
