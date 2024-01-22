import React from "react";
import { StoryObj } from "@storybook/react";
import { CircleProgress, LinearProgress } from "@edgmont-ui/react";
import { colorSelect } from "./presets";

export default {
  title: "Feedback/Progress",
  component: CircleProgress,
  args: {
    color: "primary",
    percentage: 30,
  },
  argTypes: {
    color: colorSelect,
  },
};

export const Circle: StoryObj<typeof CircleProgress> = {
  render: ({ ...rest }) => <CircleProgress {...rest} />,
};
export const Linear: StoryObj<typeof LinearProgress> = {
  render: ({ ...rest }) => <LinearProgress {...rest} />,
};
