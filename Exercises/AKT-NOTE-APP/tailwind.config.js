/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      //project colors:
      colors: {
        prmiary: '#2B85FF',
        secondary: '#EF863E'
      }
    },
  },
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
}
