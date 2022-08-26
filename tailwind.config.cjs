/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: "#FFF",
      "neutral-100": "#F3F3F3",
      "neutral-200": "#E5E5E5",
      "neutral-500": "#7D7D7D",
      "neutral-800": "#000000",
      "neutral-950": "#000000",
      transparent: "transparent",
    },

    screens: {
      sm: "22rem",
      md: "45rem",
      xl: "74rem",
      xxl: "90rem",
    },
    extend: {},
  },
  plugins: [],
};
