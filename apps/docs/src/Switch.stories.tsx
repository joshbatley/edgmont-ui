import { StoryObj } from '@storybook/react';
import { Box, Switch } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
};

export const Showcase: StoryObj<typeof Switch> = {
  render: ({ disabled, ...rest }) => (
    <Box spaceXBetween="2">
      <Box spaceXBetween="2">
        <Switch {...rest} />
        <br /><br />
        <Switch disabled {...rest} />
        <br /><br />
        <Switch disabled checked {...rest} />
      </Box>
    </Box>
  ),
};
