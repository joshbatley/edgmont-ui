export type ColorTheme = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  // radius: string;
};

export const LightThemeColors: ColorTheme = {
  background: 'rgba(255, 255, 255, 1)',
  foreground: 'rgba(2, 8, 23, 1)',
  card: 'rgba(255, 255, 255, 1)',
  cardForeground: 'rgba(2, 8, 23, 1)',
  popover: 'rgba(255, 255, 255, 1)',
  popoverForeground: 'rgba(2, 8, 23, 1)',
  primary: 'rgba(15, 23, 42, 1)',
  primaryForeground: 'rgba(248, 250, 252, 1)',
  secondary: 'rgba(241, 245, 249, 1)',
  secondaryForeground: 'rgba(15, 23, 42, 1)',
  muted: 'rgba(241, 245, 249, 1)',
  mutedForeground: 'rgba(100, 116, 139, 1)',
  accent: 'rgba(241, 245, 249, 1)',
  accentForeground: 'rgba(241, 245, 249, 1)',
  destructive: 'rgba(239, 68, 68, 1)',
  destructiveForeground: 'rgba(248, 250, 252, 1)',
  border: 'rgba(226, 232, 240, 1)',
  input: 'rgba(226, 232, 240, 1)',
  ring: 'rgba(2, 8, 23, 1)',
};

export const DarkThemeColors: ColorTheme = {
  background: 'rgba(2, 8, 23, 1)',
  foreground: 'rgba(248, 250, 252, 1)',
  card: 'rgba(2, 8, 23, 1)',
  cardForeground: 'rgba(248, 250, 252, 1)',
  popover: 'rgba(2, 8, 23, 1)',
  popoverForeground: 'rgba(248, 250, 252, 1)',
  primary: 'rgba(248, 250, 252, 1)',
  primaryForeground: 'rgba(15, 23, 42, 1)',
  secondary: 'rgba(30, 41, 59, 1)',
  secondaryForeground: 'rgba(248, 250, 252, 1)',
  muted: 'rgba(30, 41, 59, 1)',
  mutedForeground: 'rgba(148, 163, 184, 1)',
  accent: 'rgba(30, 41, 59, 1)',
  accentForeground: 'rgba(248, 250, 252, 1)',
  destructive: 'rgba(127, 29, 29, 1)',
  destructiveForeground: 'rgba(248, 250, 252, 1)',
  border: 'rgba(30, 41, 59, 1)',
  input: 'rgba(30, 41, 59, 1)',
  ring: 'rgba(203, 213, 225, 1)',

};
