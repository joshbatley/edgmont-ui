import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, ProvidedTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';
import { createContext, useContext, useEffect, useState } from 'react';
import { InheritedTheme } from '../../shared/preferColorScheme';

const LocalStorageKey = '@edgmont-ui/settings';

export type ThemeProviderProps = {
  theme?: ProvidedTheme;
  children?: React.ReactNode;
};

export type SettingsCtx = {
  theme: ProvidedTheme;
  setTheme: (theme: ProvidedTheme) => void;
  toggleTheme: () => void;
};

export const SettingsContext = createContext<SettingsCtx | undefined>(undefined);

export const useEdgmontSettings = () => {
  let context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useEdgmontSettings must be used within a EdgmontUI provider');
  }

  return context;
};

export const EdgmontUI: React.FC<ThemeProviderProps> = ({ children }) => {
  let [themeKey, setThemeKey] = useState<ProvidedTheme | undefined>(() => {
    if (localStorage.getItem(LocalStorageKey) !== null) {
      return JSON.parse(localStorage.getItem(LocalStorageKey) || '')?.theme;
    }
    return InheritedTheme;
  });
  let theme = themeKey === 'Light' ? LightTheme : DarkTheme;

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify({ theme: themeKey }));
  }, [themeKey]);

  return (
    <SettingsContext.Provider value={{
      theme: themeKey as ProvidedTheme,
      setTheme: setThemeKey,
      toggleTheme: () => setThemeKey(themeKey == 'Dark' ? 'Light' : 'Dark'),
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

