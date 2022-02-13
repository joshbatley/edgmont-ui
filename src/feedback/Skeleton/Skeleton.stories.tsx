import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Title, Text as TextComp } from 'data';
import { Skeleton } from '.';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    backgrounds: { default: 'White' },
  },
} as Meta;

export const Circle: Story = ({ ...rest }) => (
  <Skeleton varient="circle" width={50} height={50} {...rest} />
);

export const Rectangle: Story = ({ ...rest }) => (
  <Skeleton varient="rectangle" width={50} height={50}{...rest} />
);

export const Text: Story = ({ ...rest }) => (
  <div className="space-y-4">
    <Title as="h1" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 1</span>
    </Title>

    <Title as="h2" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 2</span>
    </Title>

    <Title as="h3" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 3</span>
    </Title>

    <Title as="h4" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 4</span>
    </Title>

    <Title as="h5" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 5</span>
    </Title>

    <Title as="h6" className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Heading 6</span>
    </Title>

    <TextComp className="flex space-x-2">
      <Skeleton className="w-1/4" {...rest} />
      <span>Text</span>
    </TextComp>
  </div>
);
