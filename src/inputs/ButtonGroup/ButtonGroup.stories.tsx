import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { PrimaryButton } from '../Button/PrimaryButton';
import { ButtonGroup } from './ButtonGroup';
import { OutlineButton } from '../Button/OutlineButton';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/ButtonGroups',
  component: ButtonGroup,
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
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
