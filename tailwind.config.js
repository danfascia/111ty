const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.njk', './src/**/*.svg'],
    layers: ['components'],
    options: {
      safelist: ['hidden']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
