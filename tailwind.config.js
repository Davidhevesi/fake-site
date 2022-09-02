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
      // Gradient|
      sundown: "ffb1b5",
      "ruby-red": "#EE2E1D",
    },
    fontSize: {
      lg: ["36px", { lineHeight: "36px" }],
      sm: ["22px", { lineHeight: "22px" }],
    },
    fontFamily: {
      SourceSansPro: "SourceSansPro, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
