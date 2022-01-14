import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from '.';
import { colorSelectWithWhite } from 'storybook-helpers/presets';

export default {
  title: 'Base/Panel',
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
