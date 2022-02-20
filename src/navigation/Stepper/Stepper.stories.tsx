import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { Stepper, StepLabel } from '.';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <div className="h-[300px]">
    <Stepper alternativeLabel step={1} {...rest}>
      <StepLabel>Select campaign settings</StepLabel>
      <StepLabel error>Create an ad group</StepLabel>
      <StepLabel>Create an ad</StepLabel>
    </Stepper>
  </div>
);

