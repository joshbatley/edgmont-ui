import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextFieldGroup } from '.';
import { TextField } from 'inputs';

export default {
  title: 'Inputs/TextFieldGroup',
  component: TextFieldGroup,
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <TextFieldGroup>
    <TextField placeholder="Username" />
    <TextField type="password" placeholder="Password" />
  </TextFieldGroup>
);

