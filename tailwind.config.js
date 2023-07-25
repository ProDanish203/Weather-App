/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xsm: "550px",
        xs: "450px",
      },
      backgroundImage: {
        "main": "linear-gradient(to right bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('/src/Assets/bg.jpg')"
      }
    },
  },
  plugins: [],
}

