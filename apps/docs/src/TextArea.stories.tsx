import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@edgmont-ui/react";

const meta: Meta = {
  title: "Inputs/TextArea",
  component: TextArea,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

export const Example: StoryObj<typeof TextArea> = {
  render: () => <TextArea />,
};
