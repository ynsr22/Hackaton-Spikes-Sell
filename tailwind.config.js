/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        delaGothicOne: ['Dela Gothic One', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 12px 0px rgba(0, 0, 0, 0.04)',
        'custom2': '0px 3.25px 6.5px 0px rgba(0, 0, 0, 0.07);',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(269.99deg, #3951E5 3.88%, #E693A5 101.06%)',
      },
    },
  },
  plugins: [],
}