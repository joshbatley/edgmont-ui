import { StoryObj } from '@storybook/react';
import { Box, Radio } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Radio',
  component: Radio,
};

export const Showcase: StoryObj<typeof Radio> = {
  render: () => (
    <Box spaceYBetween="2">
      <Radio labelText="Radio" />
      <Radio checked labelText="Radio Radio" />
      <Radio disabled labelText="Radio Radio" />
      <Radio checked disabled labelText="Radio Radio Checkbox" />
    </Box>
  ),
};
