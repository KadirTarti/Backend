/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
