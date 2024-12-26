/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC0000'
      },
      maxWidth: {
        '7xl': '1240px'
      }
    },
  },
  plugins: [],
}