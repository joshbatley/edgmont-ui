import React from 'react';
import { StoryObj } from '@storybook/react';
import { TabPane, Tabs } from '@edgmont-ui/react';

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
};

let arr = Array(5)
  .fill(null)
  .map(() => Math.random().toString().substring(10, 5));

export const Example: StoryObj<typeof Tabs> = {
  render: ({ ...rest }) => (
    <Tabs value={arr[arr.length - 1]} {...rest}>
      {arr.map((i, idx) => (
        <TabPane key={i} value={i} tab={`Tab button ${idx}`}>
          Content {idx}
        </TabPane>
      ))}
    </Tabs>
  ),
};
