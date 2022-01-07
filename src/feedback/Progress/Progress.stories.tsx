import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { CircleProgress, LinearProgress } from './';
import { colorSelectWithWhite } from 'storybook-helpers/presets';

export default {
  title: 'Feedback/Progress',
  component: CircleProgress,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Circle: Story = ({ ...rest }) => <CircleProgress {...rest} />;
export const Linear: Story = ({ ...rest }) => <LinearProgress {...rest} />;

