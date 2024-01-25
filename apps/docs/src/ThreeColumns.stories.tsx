import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, ThreeColumns } from '@edgmont-ui/react';

export default {
  title: 'Layout/ThreeColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

let sidebar = (
  <Box bg="primary" borderRight="background2.1" height="100vh">
    123
  </Box>
);
let mainNav = (
  <Box bg="error" borderRight="background2.1" height="100vh">
    123
  </Box>
);

export const Example: StoryObj<typeof ThreeColumns> = {
  render: () => (
    <ThreeColumns sideNav={sidebar} mainNav={mainNav}>
      <Box bg="background.1" borderRight="background2.1" height="100vh">
        123
      </Box>
    </ThreeColumns>
  ),
};
