/** @type { import('@storybook/react').Preview } */

import { EdgmontUI } from '@edgmont-ui/react'
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from './themes';

const decorators = [
  (Story: any, context: any) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    const theme = useDarkMode() ? 'Dark' : 'Light';
    return (
      // @ts-ignore
      <EdgmontUI theme={theme}>
        {Story()}
      </EdgmontUI>
    )
  },
];
const InheritedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const theme: string = (JSON.parse(localStorage.getItem('@EdgmontUI-Settings') || '{}')?.theme || InheritedTheme);

const preview = {
  decorators: decorators,
  parameters: {
    darkMode: {
      // current: theme.toLowerCase(),
      light: lightTheme,
      dark: darkTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
