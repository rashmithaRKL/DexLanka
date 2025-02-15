/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': {
          DEFAULT: '#002147',
          '700': '#001a38'
        },
        'red': {
          DEFAULT: '#FF3E3E',
          '600': '#ff2525'
        }
      }
    },
  },
  plugins: [],
}
