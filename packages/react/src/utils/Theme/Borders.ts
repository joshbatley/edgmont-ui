import { ThemeColors } from './Colors';

const borderWidths = [0, 1, 3, 4];
const borderColors = Object.keys(ThemeColors);

export type BorderColors = keyof typeof ThemeColors;

const generateBorders = (colors: typeof ThemeColors) =>
  borderColors.reduce((borderObj, key) => {
    const colorKey = key as BorderColors;
    borderObj[colorKey] = borderWidths.map((width) => {
      return `${width}px solid ${colors[colorKey]}`;
    });

    return borderObj;
  }, {} as Record<BorderColors, string[]>);

export const ThemeBorders = generateBorders(ThemeColors);

export const radii = [0, '3px', '30px', '50%'];
