/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        blue: {
          b100: "#0783FF",
          b200: "#0878E9",
          b300: "#0466C8",
          b400: "#0353A4",
          b500: "#023E7D",
          b600: "#002855",
          b700: "#001845",
          b800: "#001233",
        },
        gray: {
          b100: "#E3EBFF",
          b200: "#D9E1F6",
          b300: "#C2CADD",
          b400: "#A5ACBF",
          b500: "#979DAC",
          b600: "#7D8597",
          b700: "#5C677D",
          b800: "#33415C",
        },
      },
    },
  },
  plugins: [],
};
