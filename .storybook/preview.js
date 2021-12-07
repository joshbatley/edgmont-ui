import "../src/tailwind.css";
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#F9FAFB' }
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
