import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '.';
import { GlobalStyles } from './GlobalStyles';


export const ThemeDefaultProvider: React.FC<WithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />
    {children}
  </ThemeProvider>
);
