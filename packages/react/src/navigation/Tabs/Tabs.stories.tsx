import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Tabs, TabPane } from '.';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    type: {
      options: ['default', 'card'],
      control: { type: 'select' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} as Meta;

let arr = Array(5).fill(null).map(() => (Math.random().toString()).substring(10, 5));
export const Example: Story = ({ ...rest }) => (
  <Tabs value={arr[arr.length - 1]} {...rest}>
    {arr.map((i, idx) => (
      <TabPane key={i} value={i} tab={`Tab button ${idx}`}>Content {idx}</TabPane>
    ))}
  </Tabs>
);
