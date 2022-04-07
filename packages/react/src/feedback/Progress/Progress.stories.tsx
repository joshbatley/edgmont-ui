import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { CircleProgress, LinearProgress } from '.';

export default {
  title: 'Feedback/Progress',
  component: CircleProgress,
  args: {
    color: 'primary',
    percentage: 30,
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Circle: Story = ({ ...rest }) => <CircleProgress {...rest} />;
export const Linear: Story = ({ ...rest }) => <LinearProgress {...rest} />;

