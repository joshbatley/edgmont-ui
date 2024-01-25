import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextComp } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Data/Text',
  component: TextComp,
  args: {
    children: 'My Text element',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],
    },
  },
};

export default meta;

export const TextStory: StoryObj<typeof TextComp> = {
  render: ({ children, as }: any) => <TextComp as={as}>{children}</TextComp>,
};

export const Mono: StoryObj<typeof TextComp> = {
  render: ({ children, as }: any) => (
    <TextComp as={as} mono>
      {children}
    </TextComp>
  ),
};
