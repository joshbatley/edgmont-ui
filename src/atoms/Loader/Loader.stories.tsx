import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Loader } from './';

export default {
  title: 'Atoms/Loader',
  component: Loader,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: {
      options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = ({ ...args }) => <Loader {...args} />;
