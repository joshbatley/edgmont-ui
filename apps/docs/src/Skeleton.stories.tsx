import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Skeleton, TextComp, Title } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    varient: { table: { disable: true } },
  },
  parameters: {
    backgrounds: { default: 'White' },
  },
};

export const Circle: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Skeleton variant="circle" width={50} height={50} {...rest} />
  ),
};

export const Rectangle: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Skeleton variant="rectangle" width={50} height={50} {...rest} />
  ),
};

export const TextStory: StoryObj<typeof Skeleton> = {
  render: ({ ...rest }) => (
    <Box
      spaceYBetween="6"
      display="inline-flex"
      flexDirection="column"
      width="100%"
    >
      <Title as="h1">
        <Skeleton mr="1" width="25%" variant="text" {...rest} />
        <span>Heading 1</span>
      </Title>

      <Title as="h2">
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Heading 2</span>
      </Title>

      <Title as="h3">
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Heading 3</span>
      </Title>

      <Title as="h4">
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Heading 4</span>
      </Title>

      <Title as="h5">
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Heading 5</span>
      </Title>

      <Title as="h6">
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Heading 6</span>
      </Title>

      <TextComp>
        <Skeleton width="25%" mr="1" variant="text" {...rest} />
        <span>Text</span>
      </TextComp>
    </Box>
  ),
};
