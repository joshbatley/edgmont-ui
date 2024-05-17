/** @type { import('@storybook/react').Preview } */

import { ThemeDefaultProvider } from '@edgmont-ui/react'

const decorators = [
  (Story: any, context: any) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    const value = context?.globals?.backgrounds?.value;
    const theme = value === 'hsl(240, 10%, 3.9%)' ? 'dark' : 'light';

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
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: 'hsl(0, 0%, 100%)' },
        { name: 'Dark', value: 'hsl(240, 10%, 3.9%)' },
      ], grid: {
        disable: true,
      },
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
