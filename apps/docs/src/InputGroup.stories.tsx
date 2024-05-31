import { StoryObj } from '@storybook/react';
import { Input, InputGroup } from '@edgmont-ui/react';

export default {
  title: 'Inputs/InputGroup',
  component: InputGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof InputGroup> = {
  render: () => (
    <InputGroup>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </InputGroup>
  ),
};
