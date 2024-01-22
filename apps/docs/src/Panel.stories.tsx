import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@edgmont-ui/react";

const meta: Meta = {
  title: "Data/Panel",
  component: Panel,
  args: {
    children: "My basic panel",
  },
};

export default meta;

export const Examples: StoryObj<typeof Panel> = {
  render: ({ children, ...rest }) => (
    <Panel px="3" py="2" {...rest}>
      {children}
    </Panel>
  ),
};
