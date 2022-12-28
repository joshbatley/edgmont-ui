import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeDefaultProvider } from '../src/utils/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'Dark',
    values: [
      { name: 'Dark', value: '#0F172A' },
      { name: 'Light', value: '#F8FAFC' },
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
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
      <ThemeDefaultProvider>
        {Story()}
      </ThemeDefaultProvider>
    )
  },
];
