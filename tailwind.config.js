/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/practice-1/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "600px",
      lg: "1000px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
