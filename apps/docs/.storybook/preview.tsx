/** @type { import('@storybook/react').Preview } */

import { ThemeDefaultProvider } from '@edgmont-ui/react'
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from './themes';

const decorators = [
  (Story: any, context: any) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    const theme = useDarkMode() ? 'dark' : 'light';

    return (
      // @ts-ignore
      <ThemeDefaultProvider theme={theme}>
        {Story()}
      </ThemeDefaultProvider>
    )
  },
];
const preview = {
  decorators: decorators,
  parameters: {
    darkMode: {
      current: 'light',
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
