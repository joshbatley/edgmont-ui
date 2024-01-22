import React from "react";
import { StoryObj } from "@storybook/react";
import { EyeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Box, ClickableElement, Text, TextField } from "@edgmont-ui/react";

export default {
  title: "Inputs/TextField",
  component: TextField,
  args: {
    placeholder: "My input",
  },
};

const Before = ({ ...rest }) => (
  <ClickableElement px="3" py="2" onClick={() => alert("boo")} {...rest}>
    https://
  </ClickableElement>
);
const After = ({ ...rest }) => (
  <Box px="3" py="2">
    <Text {...rest}>.com</Text>
  </Box>
);

export const Errored: StoryObj<typeof TextField> = {
  render: ({ ...rest }) => (
    <Box spaceYBetween="2">
      <TextField error {...rest} />
      <TextField
        error
        prefiXMarkIcon={<LockClosedIcon width={16} />}
        {...rest}
      />
      <TextField error suffiXMarkIcon={<EyeIcon width={16} />} {...rest} />
      <TextField error before={<Before />} {...rest} />
      <TextField error after={<After />} {...rest} />
      <TextField error before={<Before />} after={<After />} {...rest} />
    </Box>
  ),
};

export const Disabled: StoryObj<typeof TextField> = {
  render: ({ ...rest }) => (
    <Box spaceYBetween="2">
      <TextField disabled {...rest} />
      <TextField
        disabled
        prefiXMarkIcon={<LockClosedIcon width={16} />}
        {...rest}
      />
      <TextField disabled suffiXMarkIcon={<EyeIcon width={16} />} {...rest} />
      <TextField disabled before={<Before />} {...rest} />
      <TextField disabled after={<After />} {...rest} />
      <TextField disabled before={<Before />} after={<After />} {...rest} />
    </Box>
  ),
};
