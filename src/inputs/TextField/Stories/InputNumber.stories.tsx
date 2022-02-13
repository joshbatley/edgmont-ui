import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { NumberField } from '..';

export default {
  title: 'Inputs/TextField',
  component: NumberField,
  args: {
    placeholder: 'My input',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Number: Story = ({ ...rest }) => <NumberField {...rest} />;
