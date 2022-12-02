import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '.';

const GlobalStyles = createGlobalStyle`

`;

export const DefaultThemeProvider: React.FC<WithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
