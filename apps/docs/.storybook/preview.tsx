/** @type { import('@storybook/react').Preview } */

import React from 'react';
import { ThemeDefaultProvider } from '@edgmont-ui/react'


const decorators = [
  (Story: any) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    return (
      // @ts-ignore
      <ThemeDefaultProvider>
        {Story()}
      </ThemeDefaultProvider>
    )
  },
];

const preview = {
  decorators: decorators,
  parameters: {
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
