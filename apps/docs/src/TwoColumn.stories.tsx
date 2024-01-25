import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, TwoColumns } from '@edgmont-ui/react';

export default {
  title: 'Layout/TwoColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

let sidebar = (
  <Box bg="primary" borderRight="background2.1" height="100vh">
    123
  </Box>
);

export const Example: StoryObj<typeof TwoColumns> = {
  render: () => (
    <TwoColumns sideNav={sidebar}>
      <Box bg="background.1" borderRight="background2.1" height="100vh">
        123
      </Box>
    </TwoColumns>
  ),
};
