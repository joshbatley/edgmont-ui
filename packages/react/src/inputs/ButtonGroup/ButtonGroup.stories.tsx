import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PrimaryButton } from '../Button/PrimaryButton';
import { OutlineButton } from '../Button/OutlineButton';
import { ButtonGroup } from '.';

export default {
  title: 'Inputs/Buttons/ButtonGroups',
  component: ButtonGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const PrimaryGroup: Story = () => (
  <ButtonGroup>
    <PrimaryButton>1</PrimaryButton>
    <PrimaryButton>2</PrimaryButton>
    <PrimaryButton>3</PrimaryButton>
    <PrimaryButton>4</PrimaryButton>
  </ButtonGroup>
);

export const OutlineGroup: Story = () => (
  <ButtonGroup>
    <OutlineButton>1</OutlineButton>
    <OutlineButton>2</OutlineButton>
    <OutlineButton>3</OutlineButton>
    <OutlineButton>4</OutlineButton>
  </ButtonGroup>
);
