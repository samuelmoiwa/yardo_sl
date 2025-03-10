/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode via class toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Corrected purge → content
  theme: {
    extend: {
      colors: {
        "hero-bg": "#F7F7F7",
        "purple": "#5E3BEE",
        "purple-light": "#BEB2EE",
        "purple-header": "#282938",
        "purple-body": "#1C1E53",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        noto: ["Noto Serif TC", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [], // Removed Babel-related plugin (not needed in Tailwind)
};
