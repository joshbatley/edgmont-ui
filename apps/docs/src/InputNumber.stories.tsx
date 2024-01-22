import React from "react";
import { StoryObj } from "@storybook/react";
import { NumberField } from "@edgmont-ui/react";
import { sizeSelect } from "./presets";

export default {
  title: "Inputs/TextField",
  component: NumberField,
  args: {
    placeholder: "My input",
  },
  argTypes: {
    size: sizeSelect,
  },
};

export const Number: StoryObj<typeof NumberField> = {
  render: ({ ...rest }) => <NumberField {...rest} />,
};
