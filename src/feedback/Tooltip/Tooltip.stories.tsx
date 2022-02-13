import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { directionSelect } from 'storybook-helpers/presets';
import { Box } from 'data';
import { Tooltip } from '.';

export default {
  title: 'Feedback/Tooltip',
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
