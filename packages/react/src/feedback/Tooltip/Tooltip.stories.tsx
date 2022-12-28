import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { directionSelect } from 'storybook-helpers/presets';
import { Box } from 'data';
import { Tooltip } from '.';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    tooltip: "i'm the tooltip",
    as: 'div',
  },
  argTypes: {
    direction: directionSelect,
  },
} as Meta;

export const Example: Story = ({ ...rest }: any) => (
  <Box spaceYBetween="2" display="grid" height="100vh" style={{ placeContent: 'center' }}>
    <Tooltip {...rest}>
      <Box m="5">This is wrapped</Box>
    </Tooltip>
  </Box>
);
