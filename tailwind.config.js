/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily : {
        'inter': 'Inter, sans-serif',
        'poppins': 'Poppins, sans-serif'
      },
      screens: {
        '576': '576px',
        '992': '992px',
        '1200': '1200px',
        '450': '450px',
      }
    },
  },
  plugins: [],
}