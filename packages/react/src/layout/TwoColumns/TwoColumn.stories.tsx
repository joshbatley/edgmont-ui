import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TwoColumns } from '.';
import { Box } from '../../data';

export default {
  title: 'Layout/TwoColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

let sidebar = <Box bg="primary" borderRight="background2.1" height="100vh">123</Box>;

export const Example: Story = () => (
  <TwoColumns sideNav={sidebar}>
    <Box bg="background.1" borderRight="background2.1" height="100vh">123</Box>
  </TwoColumns>
);

