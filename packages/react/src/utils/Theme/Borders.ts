import { ThemeColors } from './Colors';

const borderWidths = [0, 1, 3, 4];
const borderColors = Object.keys(ThemeColors);

export type BorderColors = keyof typeof ThemeColors;

const generateBorders = (colors: typeof ThemeColors) =>
  borderColors.reduce((borderObj, key) => {
    const colorKey = key as BorderColors;
    borderObj[colorKey] = borderWidths.map((width) =>
      `${width}px solid ${colors[colorKey]}`,
    );

    return borderObj;
  }, {} as Record<BorderColors, string[]>);

export const ThemeBorders = generateBorders(ThemeColors);

export const radii = [
  0,            // 0 - none
  '0.125rem',   // 1 - sm
  '0.25rem',    // 2 -
  '0.375rem',   // 3 - md
  '0.5rem',     // 4 - lg
  '0.75rem',    // 5 - xl
  '1rem',       // 6 - 2xl
  '1.5rem',     // 7 - 3xl
  '9999px',     // 8 - full
];
