import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { intercardinalPointsSelect, colorSelectWithWhite } from 'storybook-helpers/presets';
import { UserIcon } from 'feedback/Icons/Solid';
import { Badge } from '.';

export default {
  title: 'Feedback/Badge',
  component: Badge,
  argTypes: {
    position: intercardinalPointsSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <Badge tag="100+" {...rest}>
    <div className="rounded-lg border p-2 text-gray-700 bg-white float-left">
      <UserIcon width={20} height={20} />
    </div>
  </Badge>
);
