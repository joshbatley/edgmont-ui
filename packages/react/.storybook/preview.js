import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/utils/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#F3F4F6' },
      { name: 'Dark', value: '#1F2937' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    if (!document.getElementById('portal-root')) {
      let portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot);
    }
    return (
      <ThemeProvider theme={theme}>
        <div className='antialiased font-sans' style={{ fontSize: 14 }}>
          {Story()}
        </div>
      </ThemeProvider>
    )
  },
];
