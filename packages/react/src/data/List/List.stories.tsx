import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { List, ListItem, OrderedList as OL, UnorderedList as UL } from '.';

export default {
  title: 'Data/List',
  component: List,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const UnstyledList: Story = ({ ...rest }) => (
  <List {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const OrderedList: Story = ({ ...rest }) => (
  <OL {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </OL>
);

export const UnorderedList: Story = ({ ...rest }) => (
  <UL {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </UL>
);
