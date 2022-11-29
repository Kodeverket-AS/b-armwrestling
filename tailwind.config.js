/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        'ba-color-gold' : '#ca9d3d',
        'ba-color-light-gold' : '#fae283',
        'ba-color-dark-blue' : '#1f1f5f',
        'ba-color-navy' : '#100f3c',
      },
    },
  },
};
