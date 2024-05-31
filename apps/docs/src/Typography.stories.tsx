import { StoryObj } from '@storybook/react';
import { Typography as T, Title, Box } from '@edgmont-ui/react';

export default {
  title: 'Data/Typography',
  args: {
    children: 'My Text element',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],
    },
  },
};

export const Typography: StoryObj<typeof T> = {
  render: ({ children, as }: any) => (<>
    <T as={as}>{children}</T>
    <br />
    <T as={as} mono>
      {children}
    </T>
  </>),
};



export const Titles: StoryObj<typeof Title> = {
  render: ({ children }) => (
    <Box spaceYBetween="2">
      <Title as="h1">{children}</Title>
      <Title as="h2">{children}</Title>
      <Title as="h3">{children}</Title>
      <Title as="h4">{children}</Title>
      <Title as="h5">{children}</Title>
      <Title as="h6">{children}</Title>
    </Box>
  ),
};
