import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Tooltip } from '.';
import { directionSelect } from 'storybook-helpers/presets';
import { Box } from 'base';

export default {
  title: 'Base/Tooltip',
  component: Tooltip,
  argTypes: {
    direction: directionSelect,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <div className="grid h-screen place-content-center">
    <Tooltip tooltip="i'm the tooltip" {...rest}>
      <Box>This is wrapped</Box>
    </Tooltip>
  </div>
);
