import { StoryObj } from '@storybook/react';
import { TextArea } from '@edgmont-ui/react';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof TextArea> = {
  render: () => <TextArea />,
};
