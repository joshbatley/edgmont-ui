import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { intercardinalPointsSelect, colorSelect } from '../../storybook-helpers/presets';
import { UserIcon } from '@heroicons/react/24/solid';
import { Badge } from '.';
import { Box } from '../../data';

export default {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    tag: '100+',
  },
  argTypes: {
    position: intercardinalPointsSelect,
    color: colorSelect,
  },
} as Meta;

export const Examples: Story = ({ ...rest }: any) => (
  <Box width="50%" mt="10" mx="auto">
    <Box mt="4" display="grid" justifyItems="start" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
      <Badge position="NW" {...rest}>
        <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
          <UserIcon width={20} height={20} />
        </Box>
      </Badge>
      <Badge position="NE" {...rest}>
        <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
          <UserIcon width={20} height={20} />
        </Box>
      </Badge>
    </Box>
    <Box mt="4" display="grid" justifyItems="start" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
      <Badge position="SW" {...rest}>
        <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
          <UserIcon width={20} height={20} />
        </Box>
      </Badge>
      <Badge position="SE" {...rest}>
        <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
          <UserIcon width={20} height={20} />
        </Box>
      </Badge>
    </Box>
  </Box>
);
Examples.argTypes = {
  position: {
    table: {
      disable: true,
    },
  },
};
