import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import { Box } from "@edgmont-ui/react";
import { Button } from "@edgmont-ui/react";
import { sizeSelect } from "./presets";

export default {
  title: "Inputs/Buttons/Button",
  component: Button,
  args: {
    children: "Get started",
  },
  argTypes: {
    size: sizeSelect,
  },
};

export const Example: StoryObj<typeof Button> = {
  render: ({ children, ...rest }) => <Button {...rest}>{children}</Button>,
};

export const Sizes: StoryObj<typeof Button> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <Button size="large" {...rest}>
        {children}
      </Button>
      <Button size="medium" {...rest}>
        {children}
      </Button>
      <Button size="small" {...rest}>
        {children}
      </Button>
    </Box>
  ),
};

export const WithIcon: StoryObj<typeof Button> = {
  render: ({ children, ...rest }) => (
    <Button {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </Button>
  ),
};
