import React from 'react';
import { StoryObj } from '@storybook/react';
import { CircleProgress, LinearProgress } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Progress',
  component: CircleProgress,
};

export const Circle: StoryObj<typeof CircleProgress> = {
  render: ({ ...rest }) => <CircleProgress {...rest} />,
};

export const Linear: StoryObj<typeof LinearProgress> = {
  render: ({ ...rest }) => <LinearProgress {...rest} />,
};
