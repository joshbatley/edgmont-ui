import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { List, ListItem, OrderedList, UnorderedList } from 'base/List';
import { sizeSelect } from 'storybook-helpers/presets';


export default {
  title: 'Base/List',
  component: List,
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <List {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const AsOrderedList: Story = ({ ...rest }) => (
  <OrderedList {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </OrderedList>
);

export const AsUnorderedLost: Story = ({ ...rest }) => (
  <UnorderedList {...rest}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </UnorderedList>
);
