import { radii, generateBorders } from './Borders';
import { breakpoints } from './Breakpoints';
import { LightThemeColors, DarkThemeColors } from './Colors';
import { ThemeBoxShadow } from './Shadows';
import { animations } from './Animations';
import { spaces, spaceYBetween, spaceXBetween } from './spaces';

const theme = {
  radii,
  shadows: ThemeBoxShadow,
  breakpoints,
  animations,
  lineHeights: [
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
  ],
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.875rem',
  ],
  fonts: {
    base: "'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    mono: "ui-monospace, SFMono- Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  space: spaces,
  sizes: [
    0,
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.25rem',
    '2.5rem',
    '2.75rem',
    '3rem',
    '3.5rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem',
    '9rem',
    '10rem',
    '11rem',
    '12rem',
    '13rem',
    '14rem',
    '15rem',
    '16rem',
    '18rem',
    '20rem',
    '24rem',
  ],
  transition: 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
  spaceYBetween: spaceYBetween,
  spaceXBetween: spaceXBetween,
};

export const LightTheme = {
  colors: LightThemeColors,
  borders: generateBorders(LightThemeColors),
  ...theme,
};

export const DarkTheme = {
  colors: DarkThemeColors,
  borders: generateBorders(DarkThemeColors),
  ...theme,
};

export type TTheme = typeof DarkTheme;

