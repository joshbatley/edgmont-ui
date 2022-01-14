module.exports = {
  content: ["./src/**/*.{css,ts}"],
  safelist: [
    {
      pattern: /.*/,
    }
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.indigo,
      }),
    }
  },
}
