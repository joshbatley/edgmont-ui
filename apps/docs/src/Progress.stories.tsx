import React from 'react';
import { StoryObj } from '@storybook/react';
import { CircleProgress, LinearProgress } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Progress',
  component: CircleProgress,
  args: {
    color: 'primary',
    percentage: 30,
  },
};

export const Circle: StoryObj<typeof CircleProgress> = {
  render: ({ ...rest }) => <CircleProgress {...rest} />,
};

export const Linear: StoryObj<typeof LinearProgress> = {
  render: ({ ...rest }) => <LinearProgress {...rest} />,
};
