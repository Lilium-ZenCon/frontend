/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        "grey": "#676767",
        "darkgreen": "#1F2421"
      }
    },
  },
  plugins: [require("daisyui")],
};
