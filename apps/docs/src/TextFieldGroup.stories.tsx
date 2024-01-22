import React from "react";
import { StoryObj } from "@storybook/react";
import { TextField, TextFieldGroup } from "@edgmont-ui/react";

export default {
  title: "Inputs/TextFieldGroup",
  component: TextFieldGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Example: StoryObj<typeof TextFieldGroup> = {
  render: () => (
    <TextFieldGroup>
      <TextField placeholder="Username" />
      <TextField type="password" placeholder="Password" />
    </TextFieldGroup>
  ),
};
