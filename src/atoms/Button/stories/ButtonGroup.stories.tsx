import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { PrimaryButton } from '../PrimaryButton';
import { ButtonGroup } from '../ButtonGroup';
import { OutlineButton } from '../OutlineButton';

export default {
  title: 'Atoms/Button/ButtonGroups',
  component: ButtonGroup,
  args: {
    children: 'Get started',
    color: 'gray',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },

    },
    color: {
      options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const PrimaryGroup: Story = ({ ...args }) => (
  <ButtonGroup>
    <PrimaryButton>1</PrimaryButton>
    <PrimaryButton>2</PrimaryButton>
    <PrimaryButton>3</PrimaryButton>
    <PrimaryButton>4</PrimaryButton>
  </ButtonGroup>
);

export const OutlineGroup: Story = ({ ...args }) => (
  <ButtonGroup>
    <OutlineButton>1</OutlineButton>
    <OutlineButton>2</OutlineButton>
    <OutlineButton>3</OutlineButton>
    <OutlineButton>4</OutlineButton>
  </ButtonGroup>
);
