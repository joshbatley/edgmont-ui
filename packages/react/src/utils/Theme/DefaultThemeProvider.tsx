import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

type ThemeProviderProps = {
  theme?: 'light' | 'dark';
  children?: React.ReactNode
};

export const ThemeDefaultProvider: React.FC<ThemeProviderProps> = ({ children, theme = 'light' }) => {
  let pickedTheme = theme == 'light' ? LightTheme : DarkTheme;
  return (
    <ThemeProvider theme={pickedTheme}>
      <GlobalStyles theme={pickedTheme} />
      {children}
    </ThemeProvider>
  );
};
