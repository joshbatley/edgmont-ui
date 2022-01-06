import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Tabs, TabPane } from './';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} as Meta;

export const Default: Story = () => {
  let arr = Array(5).fill(null).map(() => btoa(Math.random().toString()).substr(10, 5));
  return (
    <Tabs value={arr[arr.length - 1]}>
      {arr.map((i, idx) => (
        <TabPane key={i} value={i} tab={`Tab button ${idx}`}>Content {idx}</TabPane>
      ))}
    </Tabs>
  );
};
