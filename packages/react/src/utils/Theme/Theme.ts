import { radii, ThemeBorders } from './Borders';
import { ThemeColors } from './Colors';
import { ThemeBoxShadow } from './Shadows';

export const theme = {
  colors: ThemeColors,
  borders: ThemeBorders,
  radii,
  shadows: ThemeBoxShadow,
  lineHeights: ['16px', '24px', '32px'],
  fontSizes: ['13px', '14px', '16px', '20px', '24px'],
  fonts: {
    base: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    mono: "ui-monospace, SFMono- Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  space: [0, '4px', '8px', '16px', '24px', '32px', '40px', '56px'],
  modal: {
    bg: 'rgba(30,36,46,0.70)',
  },
};
