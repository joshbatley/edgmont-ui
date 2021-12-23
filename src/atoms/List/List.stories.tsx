import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { List, ListItem, OrderedList, UnorderedList } from 'atoms/List';


export default {
  title: 'Atoms/List',
  component: List,
  args: {
    label: 'My select menu',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = ({ ...args }) => (
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const AsOrderedList: Story = ({ ...args }) => (
  <OrderedList {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </OrderedList>
);

export const AsUnorderedLost: Story = ({ ...args }) => (
  <UnorderedList {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </UnorderedList>
);