export default {
  theme: {
    extend: {
      colors: ({ colors }: any) => ({
        primary: colors.indigo,
        gray: colors.slate,
        green: colors.emerald,
        red: colors.rose,
        yellow: colors.amber,
        blue: colors.sky,
        purple: colors.indigo,
        teal: colors.teal,
        pink: colors.pink,
      }),
    },
  },
  safelist: [
    {
      pattern: /pl-.*/,
    },
    {
      pattern: /bg-(.*)-(.*)/,
      variants: ['hover', 'peer-checked', 'group-hover'],
    },
    {
      pattern: /text-(.*)-(.*)/,
      variants: ['hover', 'peer-checked', 'group-hover'],
    },
    {
      pattern: /border-(.*)-(.*)/,
      variants: ['hover', 'peer-checked', 'group-hover'],
    },
    {
      pattern: /stroke-(.*)-(.*)/,
      variants: ['hover', 'peer-checked', 'group-hover'],
    },
    {
      pattern: /ring-(.*)-(.*)/,
      variants: ['hover', 'peer-checked', 'group-hover'],
    },
  ],
};
