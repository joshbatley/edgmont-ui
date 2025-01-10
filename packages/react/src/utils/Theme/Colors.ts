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
  offsetBackground: string;
  offsetForeground: string;
};

export const LightThemeColors: ColorTheme = {
  background: 'hsl(0, 0%, 100%)',
  foreground: 'hsl(240, 10%, 3.9%)',
  card: 'hsl(0, 0%, 100%)',
  cardForeground: 'hsl(240, 10%, 3.9%)',
  popover: 'hsl(0, 0%, 100%)',
  popoverForeground: 'hsl(240, 10%, 3.9%)',
  primary: 'hsl(240, 5.9%, 10%)',
  primaryForeground: 'hsl(0, 0%, 98%)',
  secondary: 'hsl(240, 4.8%, 95.9%)',
  secondaryForeground: 'hsl(240, 5.9%, 10%)',
  muted: 'hsl(240, 4.8%, 95.9%)',
  mutedForeground: 'hsl(240, 3.8%, 46.1%)',
  accent: 'hsl(240, 4.8%, 95.9%)',
  accentForeground: 'hsl(240, 5.9%, 10%)',
  destructive: 'hsl(0, 84.2%, 60.2%)',
  destructiveForeground: 'hsl(0, 0%, 98%)',
  border: 'hsl(240, 5.9%, 90%)',
  input: 'hsl(240, 5.9%, 90%)',
  ring: 'hsl(240, 5.9%, 10%)',
  offsetBackground: 'hsl(0, 0%, 98%)',
  offsetForeground: 'hsl(240, 5.3%, 26.1%)',
};

export const DarkThemeColors: ColorTheme = {
  background: 'hsl(240, 10%, 3.9%)',
  foreground: 'hsl(0, 0%, 98%)',
  card: 'hsl(240, 10%, 3.9%)',
  cardForeground: 'hsl(0, 0%, 98%)',
  popover: 'hsl(240, 10%, 3.9%)',
  popoverForeground: 'hsl(0, 0%, 98%)',
  primary: 'hsl(0, 0%, 98%)',
  primaryForeground: 'hsl(240, 5.9%, 10%)',
  secondary: 'hsl(240, 3.7%, 15.9%)',
  secondaryForeground: 'hsl(0, 0%, 98%)',
  muted: 'hsl(240, 3.7%, 15.9%)',
  mutedForeground: 'hsl(240, 5%, 64.9%)',
  accent: 'hsl(240, 3.7%, 15.9%)',
  accentForeground: 'hsl(0, 0%, 98%)',
  destructive: 'hsl(0, 65.10%, 50.60%)',
  destructiveForeground: 'hsl(0, 0%, 98%)',
  border: 'hsl(240, 3.7%, 15.9%)',
  input: 'hsl(240, 3.7%, 15.9%)',
  ring: 'hsl(240, 4.9%, 83.9%)',
  offsetBackground: 'hsl(240, 5.9%, 10%)',
  offsetForeground: 'hsl(240, 4.8%, 95.9%)',
};
