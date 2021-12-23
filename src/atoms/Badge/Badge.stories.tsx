import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Badge } from '.';
import { UserIcon } from 'atoms/Icons/Solid';
import { intercardinalPointsSelect, colorSelect } from 'storybook-helpers/presets';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  args: {
    color: 'gray',
  },
  argTypes: {
    position: intercardinalPointsSelect,
    color: colorSelect,
  },
} as Meta;

export const Default: Story = ({ ...args }) => (
  <Badge tag="1" {...args}>
    <div className="rounded-lg border p-2 text-gray-700 bg-white float-left">
      <UserIcon width={20} height={20} />
    </div>
  </Badge>
);
