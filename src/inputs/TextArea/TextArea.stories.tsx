import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextArea } from '.';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
} as Meta;

export const Default: Story = () => (
  <TextArea />
);

