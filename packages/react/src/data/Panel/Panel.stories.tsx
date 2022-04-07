import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from '.';

export default {
  title: 'Data/Panel',
  component: Panel,
  args: {
    className: '',
    children: 'My basic panel',
  },
} as Meta;

export const Examples: Story = ({ children, ...rest }) => (
  <Panel {...rest}>
    {children}
  </Panel>
);
