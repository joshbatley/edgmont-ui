import "../src/tailwind.css";
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#F9FAFB' },
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
  (Story) => (
    <div className="antialiased font-sans">
      {Story()}
    </div>
  ),
];
