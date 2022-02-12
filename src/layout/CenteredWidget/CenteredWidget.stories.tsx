import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from 'data';
import { CenteredWidget } from '.';

export default {
  title: 'Layout/Centered Widget',
} as Meta;

export const Default: Story = () => (
  <CenteredWidget>
    <Panel className="h-96 p-2">123</Panel>
  </CenteredWidget>
);

