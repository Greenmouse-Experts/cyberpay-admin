/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50:'#F7F9FB',
          100: "#1C1C1C1A",
          200: "#1C1C1C0D",
          300: "#1C1C1C33",
          500: "#1C1C1C66",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
