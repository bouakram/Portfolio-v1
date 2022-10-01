/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        lightBG : "#FFE9DC",
        secLightBg : "#FFD8C2",
        darkBG : "#23272A",
        secDarkBG : "#363A3F"
      }
    },
  },
  plugins: [],
}
