/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: ({ colors }) => ({
      primary: colors.indigo,
      gray: colors.slate,
      green: colors.emerald,
      lime: colors.lime,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.sky,
      purple: colors.violet,
      orange: colors.orange,
      pink: colors.pink,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
    }),
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}',
    '../../node_modules/@edgmont-ui/react/**/*.{js,jsx,ts,tsx}',
  ],
}
