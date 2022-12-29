import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from '../../inputs';
import { TextFieldGroup } from '.';

export default {
  title: 'Inputs/TextFieldGroup',
  component: TextFieldGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Example: Story = () => (
  <TextFieldGroup>
    <TextField placeholder="Username" />
    <TextField type="password" placeholder="Password" />
  </TextFieldGroup>
);

