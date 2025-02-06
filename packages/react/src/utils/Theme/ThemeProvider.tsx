import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';
import { createContext, useContext, useEffect, useState } from 'react';

export type ProvidedTheme = 'Light' | 'Dark';

export type ThemeProviderProps = {
  theme?: ProvidedTheme;
  children?: React.ReactNode;
};

export type ThemeCtx = {
  theme: ProvidedTheme;
  setTheme: (theme: ProvidedTheme) => void;
  toggleTheme: () => void;
};

export const InheritedTheme: ProvidedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'Light' : 'Dark';

export const ThemeContext = createContext<ThemeCtx | undefined>(undefined);

export const useEdgmontTheme = () => {
  let context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useEdgmontTheme must be used within a ThemeContext provider');
  }

  return context;
};

export const EdgmontUI: React.FC<ThemeProviderProps> = ({ children, theme: defaultTheme }) => {
  let [themeKey, setTheme] = useState<ProvidedTheme | undefined>(defaultTheme || InheritedTheme);
  let theme = themeKey === 'Light' ? LightTheme : DarkTheme;

  useEffect(() => {
    setTheme(defaultTheme || InheritedTheme);
  }, [defaultTheme]);

  return (
    <ThemeContext.Provider value={{
      theme: themeKey as ProvidedTheme,
      setTheme,
      toggleTheme: () => setTheme(themeKey == 'Dark' ? 'Light' : 'Dark'),
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

