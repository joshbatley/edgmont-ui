import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { CircleLoader, LinearLoader } from '.';
import { colorSelectWithWhite } from 'storybook-helpers/presets';

export default {
  title: 'Feedback/Loader',
  component: CircleLoader,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Circle: Story = ({ ...rest }) => <CircleLoader {...rest} />;
export const Linear: Story = ({ ...rest }) => <LinearLoader {...rest} />;

