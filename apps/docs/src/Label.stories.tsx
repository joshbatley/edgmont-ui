import { StoryObj } from '@storybook/react';
import { Box, Label, Input } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Label',
  component: Label,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof Label> = {
  render: () => (
    <Box spaceYBetween="6">
      <Label value="Username">
        <Input placeholder="Username" />
      </Label>

      <Label value="Username">
        <Input placeholder="Username" required />
      </Label>

      <Label error value="Username">
        <Input placeholder="Username" required />
      </Label>
    </Box>
  ),
};
