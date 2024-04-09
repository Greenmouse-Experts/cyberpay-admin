/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graylighter:"#1C1C1C1A",
        graylighter2:"#1C1C1C0D",
        graylight:"#1C1C1C33",
        graynormal:"#1C1C1C66"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}


