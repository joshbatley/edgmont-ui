const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      green: colors.emerald,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      purple: colors.indigo,
      teal: colors.teal,
      pink: colors.pink,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
