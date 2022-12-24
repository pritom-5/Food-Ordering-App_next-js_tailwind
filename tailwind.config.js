/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ptSerif: "'PT Serif', serif",
        ptSans: "'PT Sans', sans",
      },
    },
  },
  plugins: [],
};
