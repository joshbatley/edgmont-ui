import { StoryObj } from '@storybook/react';
import { Box, Switch } from '@edgmont-ui/react';
import { useState } from 'react';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
};

export const Showcase: StoryObj<typeof Switch> = {
  render: ({ disabled, ...rest }) => {
    let [check, setCheck] = useState<boolean>(false);
    return (
      <Box spaceXBetween="2">
        <Box spaceXBetween="2">
          <Switch {...rest} onChange={() => { }} />
          <br /><br />
          <Switch disabled {...rest} />
          <br /><br />
          <Switch disabled checked {...rest} onChange={() => { }} />
          <br /><br />
          <Switch checked={check} {...rest} onChange={() => setCheck(!check)} />
        </Box>
      </Box>
    );
  },
};
