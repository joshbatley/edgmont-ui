import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { ClickableElement } from '../ClickableElement';

export default {
  title: 'Atoms/Button/ClickableElement',
  component: ClickableElement,
  args: {
    children: 'Click me',
    color: 'gray',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },

    },
    color: {
      options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => (
  <div>You can click this and it will work <ClickableElement {...args}>{children}</ClickableElement>. No really</div>
);

