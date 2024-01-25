import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

type ThemeProviderProps = {
  theme?: 'light' | 'dark';
  children?: React.ReactNode
};

export const ThemeDefaultProvider: React.FC<ThemeProviderProps> = ({ children, theme = 'dark' }) => {
  let pickedTheme = theme !== 'light' ? DarkTheme : LightTheme;
  if (theme === 'light') {
    console.warn('THEME NOT FINALISED USED AT OWN RISK');
  }
  return (
    <ThemeProvider theme={pickedTheme}>
      <GlobalStyles theme={pickedTheme} />
      {children}
    </ThemeProvider>
  );
};
