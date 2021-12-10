import React from 'react';
import config from '../src/tailwind';

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
  (Story) => {
    const script = document.createElement("script");
    script.innerHTML = `tailwind.config = { theme: { colors: ${config.theme.colors.toString()} }}`;
    script.async = true;
    document.body.appendChild(script);
    return (
      <div>

        <div className="antialiased font-sans">
          {Story()}
        </div>
      </div>
    )
  },
];
