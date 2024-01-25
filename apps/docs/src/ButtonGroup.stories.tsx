import React from 'react';
import { StoryObj } from '@storybook/react';
import { PrimaryButton } from '@edgmont-ui/react';
import { OutlineButton } from '@edgmont-ui/react';
import { ButtonGroup } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/ButtonGroups',
  component: ButtonGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const PrimaryGroup: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <ButtonGroup>
      <PrimaryButton>1</PrimaryButton>
      <PrimaryButton>2</PrimaryButton>
      <PrimaryButton>3</PrimaryButton>
      <PrimaryButton>4</PrimaryButton>
    </ButtonGroup>
  ),
};

export const OutlineGroup: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <ButtonGroup>
      <OutlineButton>1</OutlineButton>
      <OutlineButton>2</OutlineButton>
      <OutlineButton>3</OutlineButton>
      <OutlineButton>4</OutlineButton>
    </ButtonGroup>
  ),
};
