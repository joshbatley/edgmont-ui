import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { CircleLoader, LinearLoader } from '.';

export default {
  title: 'Feedback/Loader',
  component: CircleLoader,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Circle: Story = ({ ...rest }) => <CircleLoader {...rest} />;
export const Linear: Story = ({ ...rest }) => <LinearLoader {...rest} />;

