/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      BloodCrow: ['Blood Crow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#b3fffc',
      },
    },
  },
  plugins: [],
};
