/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FEAF00",
        navbarColor: "#F2EAE1",
        labelColor: "#6C6C6C",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
