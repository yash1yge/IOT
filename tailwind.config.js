const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      "md": "767px",
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
    },
  },
  plugins: [],
})