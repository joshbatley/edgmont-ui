import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box } from '@edgmont-ui/react';
import { Chip } from '@edgmont-ui/react';
import { colorSelect, sizeSelect } from './presets';
import { Colors as CT } from '@edgmont-ui/react/src/types';

export default {
  title: 'Feedback/Chip',
  component: Chip,
  args: {
    children: 'Chip',
  },
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
};

export const Example: StoryObj<typeof Chip> = {
  render: ({ children, ...rest }) => <Chip {...rest}>{children}</Chip>,
};

export const Colors: StoryObj<typeof Chip> = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box display="flex">
      {colorSelect.options.map((c) => (
        <Box mr="2">
          <Chip {...rest} key={c} color={c as CT}>
            {children}
          </Chip>
        </Box>
      ))}
    </Box>
  ),
};
