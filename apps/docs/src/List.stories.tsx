import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  List,
  ListItem,
  OrderedList as OL,
  UnorderedList as UL,
} from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Data/List',
  component: List,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

export const UnstyledList: StoryObj<typeof List> = {
  render: ({ ...rest }) => (
    <List {...rest}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const OrderedList: StoryObj<typeof OL> = {
  render: ({ ...rest }) => (
    <OL {...rest}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OL>
  ),
};

export const UnorderedList: StoryObj<typeof UL> = {
  render: ({ ...rest }) => (
    <UL {...rest}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UL>
  ),
};
