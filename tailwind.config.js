module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'mont': ['Montserrat'],
      'lobster': ['Lobster']
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
