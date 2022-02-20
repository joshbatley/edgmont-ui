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
    step: 1,
    alternativeLabel: false,
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Example: Story = ({ ...rest }: any) => (
  <div className="h-[300px]">
    <Stepper {...rest}>
      <StepLabel>Select campaign settings</StepLabel>
      <StepLabel>Create an ad group</StepLabel>
      <StepLabel>Create an ad</StepLabel>
    </Stepper>
  </div>
);

export const ErrorStep: Story = ({ ...rest }: any) => (
  <div className="h-[300px]">
    <Stepper {...rest}>
      <StepLabel>Select campaign settings</StepLabel>
      <StepLabel error>Create an ad group</StepLabel>
      <StepLabel>Create an ad</StepLabel>
    </Stepper>
  </div>
);

