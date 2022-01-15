import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { NumberField } from '../NumberField';
import { sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/TextField',
  component: NumberField,
  args: {
    placeholder: 'My input',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Number: Story = ({ ...rest }) => <NumberField {...rest} />;
