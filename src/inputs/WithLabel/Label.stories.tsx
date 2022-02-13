import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from 'inputs';
import { Label } from '.';

export default {
  title: 'Inputs/Label',
  component: Label,
} as Meta;

export const Default: Story = () => (
  <div className="space-y-6">
    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>

    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>
  </div>
);

