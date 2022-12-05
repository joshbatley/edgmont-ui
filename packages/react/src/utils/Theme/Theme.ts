import { radii, ThemeBorders } from './Borders';
import { ThemeColors } from './Colors';
import { ThemeBoxShadow } from './Shadows';

export const theme = {
  colors: ThemeColors,
  borders: ThemeBorders,
  radii,
  shadows: ThemeBoxShadow,
  lineHeights: [
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '1.75rem',
  ],
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
  ],
  fonts: {
    base: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    mono: "ui-monospace, SFMono- Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  space: [
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
  ],
  modal: {
    bg: 'rgba(15, 23, 42, 0.70)',
  },
  transition: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
};