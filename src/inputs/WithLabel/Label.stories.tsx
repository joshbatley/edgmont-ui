import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Label } from '.';
import { TextField } from 'inputs';

export default {
  title: 'Inputs/Label',
  component: Label,
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <div className="space-y-6">
    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>

    <Label value="Username">
      <TextField placeholder="Username" />
    </Label>
  </div>
);

