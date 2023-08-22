/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      bodyFont: ["Poppins", "sans-serif"],
      titleFont: ["Montserrat", "sans-serif"],
    },
    colors: {
      bodyColor: "#212428",
      // bodyColor: "#353238",
      dark: "#000",
      black: "#212428",
      red: "#fe9109",
      lightText: "#c4cfde",
      gray: "#a1a1a1",
      blue: "#1144ee",
      boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      sky: "#19d3ea",
      // designColor: "#ee964b",
      // designColor: "#d81e5b",
      designColor: "#2274ab",
      white: "#fff",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
  plugins: [],
}