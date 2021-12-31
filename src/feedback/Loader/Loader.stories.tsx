import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Loader } from './';
import { colorSelectWithWhite } from 'storybook-helpers/presets';

export default {
  title: 'Feedback/Loader',
  component: Loader,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => <Loader {...rest} />;
