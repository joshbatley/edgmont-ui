import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from '../../inputs';
import { Label } from '.';
import { Box } from '../../data';

export default {
  title: 'Inputs/Label',
  component: Label,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Example: Story = () => (
  <Box spaceYBetween="6">
    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>

    <Label value="Username" >
      <TextField placeholder="Username" required />
    </Label>
  </Box>
);

