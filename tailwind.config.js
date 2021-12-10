const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      green: colors.emerald,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      purple: colors.indigo,
      teal: colors.teal,
      pink: colors.pink,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
