/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      redish: "#EE2D1C",
      blackish: "#4c4c51",
      blueish: "#88939E",
      white: "#ffff",
      black: "#0000",
      sundown: "ffb1b5",
      "ruby-red": "#EE2E1D",
    },
    fontSize: {
      lg: ["36px", { lineHeight: "36px" }],
      sm: ["15px", { lineHeight: "15px" }],
    },
    fontFamily: {
      SourceSansPro: "SourceSansPro, sans-serif",
      SourceSansProSemi: "SourceSansPro, sans-serif",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
