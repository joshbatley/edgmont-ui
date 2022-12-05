import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '.';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    font-family: ${theme.fonts.base};
  }
`;

export const ThemeDefaultProvider: React.FC<WithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);