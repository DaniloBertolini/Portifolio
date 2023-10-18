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
        'grayPrimary': '#C4C4C4',
        'blueGradient': '#10d7e2',
        'purpleGradient': '#9159f6',
        'pinkGradient': '#cf3f76',
        'purpleGrandient2': '#6919b1',
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

