import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from '../../data';
import { CenteredWidget } from '.';

export default {
  title: 'Layout/Centered Widget',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Example: Story = () => (
  <CenteredWidget>
    <Panel height="29" p="2">123</Panel>
  </CenteredWidget>
);

