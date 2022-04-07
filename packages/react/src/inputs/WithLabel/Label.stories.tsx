import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from 'inputs';
import { Label } from '.';

export default {
  title: 'Inputs/Label',
  component: Label,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Example: Story = () => (
  <div className="space-y-6">
    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>

    <Label value="Username" >
      <TextField placeholder="Username" required />
    </Label>
  </div>
);

