import React from 'react';
import { StoryObj } from '@storybook/react';
import { CircleLoader, LinearLoader } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Loader',
  component: CircleLoader,
  args: {
    color: 'primary',
  },
};

export const Circle: StoryObj<typeof CircleLoader> = {
  render: ({ ...rest }) => <CircleLoader {...rest} />,
};

export const Linear: StoryObj<typeof LinearLoader> = {
  render: ({ ...rest }) => <LinearLoader {...rest} />,
};
