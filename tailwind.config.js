/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBluePrimary': '#00D2DF',
        'blackPrimary': '#121212',
        'blackSecondary': '#151515',
        'grayPrimary': '#C4C4C4'
      }
    },
  },
  plugins: [],
}

