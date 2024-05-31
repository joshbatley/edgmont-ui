import { StoryObj } from '@storybook/react';
import { Box } from '@edgmont-ui/react';

export default {
  title: 'Data/Box',
  component: Box,
  args: {
    children: 'My Box',
    px: '6',
    py: '2',
  },
};

export const Showcase: StoryObj<typeof Box> = {
  render: ({ children, ...rest }: any) => <Box {...rest}>{children}</Box>,
};
