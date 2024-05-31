import React from 'react';
import { StoryObj } from '@storybook/react';
import { NumberField } from '@edgmont-ui/react';

export default {
  title: 'Inputs/TextField',
  component: NumberField,
  args: {
    placeholder: 'My input',
  },
};

export const NumberStory: StoryObj<typeof NumberField> = {
  render: ({ ...rest }) => <NumberField {...rest} />,
};
