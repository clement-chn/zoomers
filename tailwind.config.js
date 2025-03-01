/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tw-cen': ['Tw Cen MT Condensed Extra Bold', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'pr-violet': '#7700B6',
        'pr-pink': '#FF2B69',
        'pr-orange': '#FF5D17',
        'se-yellow': '#F6F64F',
        'se-white': '#F5F5F5',
        'se-dark': '#0A0A0A',
      },
    },
  },
  plugins: [],
}

