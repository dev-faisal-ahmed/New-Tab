/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#d4d4d5",
          200: "#a9aaab",
          300: "#7f7f81",
          400: "#545557",
          500: "#292a2d",
          600: "#212224",
          700: "#19191b",
          800: "#101112",
          900: "#080809",
        },
      },
    },
  },

  plugins: [],
};
