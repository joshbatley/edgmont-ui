import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@edgmont-ui/react';

const meta: Meta<typeof Box> = {
  title: 'Data/Box',
  component: Box,
  args: {
    children: 'My Box',
    px: '6',
    py: '2',
  },
};

export default meta;

export const Example: StoryObj<typeof Box> = {
  render: ({ children, ...rest }: any) => <Box {...rest}>{children}</Box>,
};
