import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { Panel } from '.';

export default {
  title: 'Data/Panel',
  component: Panel,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <Panel {...rest}>
    123
  </Panel>
);
