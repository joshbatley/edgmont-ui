import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { intercardinalPointsSelect, colorSelectWithWhite } from 'storybook-helpers/presets';
import { UserIcon } from '@heroicons/react/solid';
import { Badge } from '.';

export default {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    tag: '100+',
  },
  argTypes: {
    position: intercardinalPointsSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Examples: Story = ({ ...rest }: any) => (
  <div className="space-y-4 w-1/2 mt-10 mx-auto">
    <div className="space-x-10 grid grid-cols-2 justify-items-start">
      <Badge position="NW" {...rest}>
        <div className="rounded-lg border p-2 text-gray-700 bg-white">
          <UserIcon width={20} height={20} />
        </div>
      </Badge>
      <Badge position="NE" {...rest}>
        <div className="rounded-lg border p-2 text-gray-700 bg-white">
          <UserIcon width={20} height={20} />
        </div>
      </Badge>
    </div>
    <div className="space-x-10 grid grid-cols-2 justify-items-start">
      <Badge position="SW" {...rest}>
        <div className="rounded-lg border p-2 text-gray-700 bg-white">
          <UserIcon width={20} height={20} />
        </div>
      </Badge>
      <Badge position="SE" {...rest}>
        <div className="rounded-lg border p-2 text-gray-700 bg-white">
          <UserIcon width={20} height={20} />
        </div>
      </Badge>
    </div>
  </div>
);
Examples.argTypes = {
  position: {
    table: {
      disable: true,
    },
  },
};
