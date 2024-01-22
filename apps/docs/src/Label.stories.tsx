import React from "react";
import { StoryObj } from "@storybook/react";
import { Box, Label, TextField } from "@edgmont-ui/react";

export default {
  title: "Inputs/Label",
  component: Label,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Example: StoryObj<typeof Label> = {
  render: () => (
    <Box spaceYBetween="6">
      <Label value="Username">
        <TextField placeholder="Username" />
      </Label>

      <Label value="Username">
        <TextField placeholder="Username" required />
      </Label>
    </Box>
  ),
};
