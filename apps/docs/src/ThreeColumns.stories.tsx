import { StoryObj } from '@storybook/react';
import { Box, ThreeColumns } from '@edgmont-ui/react';

export default {
  title: 'Layout/ThreeColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

let sidebar = (
  <Box bg="primary" borderRight="background.1" height="100vh">
    123
  </Box>
);
let mainNav = (
  <Box bg="destructive" borderRight="background.1" height="100vh">
    123
  </Box>
);

export const Showcase: StoryObj<typeof ThreeColumns> = {
  render: () => (
    <ThreeColumns sideNav={sidebar} mainNav={mainNav}>
      <Box bg="muted" borderRight="background.1" height="100vh">
        123
      </Box>
    </ThreeColumns>
  ),
};
