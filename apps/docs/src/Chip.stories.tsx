import React from "react";
import { StoryObj } from "@storybook/react";
import { Box } from "@edgmont-ui/react";
import { Chip } from "@edgmont-ui/react";
import { colorSelect, sizeSelect } from "./presets";

export default {
  title: "Feedback/Chip",
  component: Chip,
  args: {
    children: "Chip",
  },
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
};

export const Example: StoryObj<typeof Chip> = {
  render: ({ children, ...rest }) => <Chip {...rest}>{children}</Chip>,
};

export const Sizes: StoryObj<typeof Chip> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box display="flex" alignItems="center">
      <Box mr="2">
        <Chip {...rest} size="large">
          {children}
        </Chip>
      </Box>
      <Box mr="2">
        <Chip {...rest} size="medium">
          {children}
        </Chip>
      </Box>
      <Box mr="2">
        <Chip {...rest} size="small">
          {children}
        </Chip>
      </Box>
    </Box>
  ),
};

export const Colors: StoryObj<typeof Chip> = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box display="flex">
      {colorSelect.options.map((c) => (
        <Box mr="2">
          <Chip {...rest} key={c} color={c}>
            {children}
          </Chip>
        </Box>
      ))}
    </Box>
  ),
};

export const WithDelete: StoryObj<typeof Chip> = {
  render: ({ children, ...rest }) => (
    <Chip handleDelete={() => alert("deleting")} {...rest}>
      {children}
    </Chip>
  ),
};
