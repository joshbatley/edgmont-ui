import { StoryObj } from '@storybook/react';
import {
  List,
  ListItem,
  OrderedList as OL,
  UnorderedList as UL,
} from '@edgmont-ui/react';


export default {
  title: 'Data/List',
  component: List,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof List> = {
  render: ({ ...rest }) => (
    <>
      <List {...rest}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
      <br /> <br />
      <OL {...rest}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </OL>
      <br /> <br />
      <UL {...rest}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </UL>
    </>
  ),
};
