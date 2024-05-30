import React from 'react';
import { StoryObj } from '@storybook/react';
import { CodeBracketIcon, LockClosedIcon, CalendarIcon } from '@heroicons/react/24/solid';
import {
  Box,
  ClickableElement,
  Password as PasswordComp,
  TextComp,
  TextField,
} from '@edgmont-ui/react';
import { sizeSelect } from './presets';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  args: {
    placeholder: 'Email',
  },
  argTypes: {
    size: sizeSelect,
  },
};

const Before = ({ ...rest }) => (
  <ClickableElement px="3" py="2" onClick={() => alert('boo')} {...rest}>
    https://
  </ClickableElement>
);
const After = ({ ...rest }) => (
  <Box px="3" py="2">
    <TextComp {...rest}>.com</TextComp>
  </Box>
);

export const Example: StoryObj<typeof TextField> = {
  render: ({ ...rest }) => <Box width="320px"><TextField {...rest} /></Box>,
};

export const PrefixAndSuffix: StoryObj<typeof TextField> = {
  render: ({ ...rest }) => (
    <Box spaceYBetween="2" width="320px">
      <TextField prefiXMarkIcon={<CalendarIcon width={16} />} {...rest} />
      <TextField suffiXMarkIcon={<CodeBracketIcon width={16} />} {...rest} />
      <TextField
        prefiXMarkIcon={<LockClosedIcon width={16} />}
        suffiXMarkIcon={<CodeBracketIcon width={16} />}
        {...rest}
      />
    </Box>
  ),
};

export const Addons: StoryObj<typeof TextField> = {
  render: ({ ...rest }) => (
    <Box spaceYBetween="2" width="320px">
      <TextField before={<Before />} {...rest} />
      <TextField after={<After />} {...rest} />
      <TextField before={<Before />} after={<After />} {...rest} />
    </Box>
  ),
};

export const Password: StoryObj<typeof PasswordComp> = {
  render: ({ ...rest }) => <Box width="320px"><PasswordComp {...rest} /></Box>,
};
