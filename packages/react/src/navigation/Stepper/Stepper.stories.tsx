import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Stepper, StepLabel } from '.';
import { Box } from 'data';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  args: {
    step: 1,
    alternativeLabel: false,
  },
} as Meta;

export const Example: Story = ({ ...rest }: any) => (
  <Box height="300px">
    <Stepper {...rest}>
      <StepLabel>Select campaign settings</StepLabel>
      <StepLabel>Create an ad group</StepLabel>
      <StepLabel>Create an ad</StepLabel>
    </Stepper>
  </Box>
);

export const ErrorStep: Story = ({ ...rest }: any) => (
  <Box height="300px">
    <Stepper {...rest}>
      <StepLabel>Select campaign settings</StepLabel>
      <StepLabel error>Create an ad group</StepLabel>
      <StepLabel>Create an ad</StepLabel>
    </Stepper>
  </Box>
);

