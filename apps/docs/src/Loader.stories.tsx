import { StoryObj } from '@storybook/react';
import { CircleLoader, LinearLoader } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Loader',
  component: CircleLoader,
};

export const Circle: StoryObj<typeof CircleLoader> = {
  render: ({ ...rest }) => <>
    <CircleLoader {...rest} />
    <CircleLoader destructive {...rest} />
  </>,
};

export const Linear: StoryObj<typeof LinearLoader> = {
  render: ({ ...rest }) => <>
    <LinearLoader {...rest} />
    <br />
    <LinearLoader destructive {...rest} />
  </>,
};
