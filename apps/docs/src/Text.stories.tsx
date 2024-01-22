import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@edgmont-ui/react";

const meta: Meta = {
  title: "Data/Text",
  component: Text,
  args: {
    children: "My Text element",
  },
  argTypes: {
    as: {
      options: ["p", "span", "b"],
    },
  },
};

export default meta;

export const TextComp: StoryObj<typeof Text> = {
  render: ({ children, as }: any) => <Text as={as}>{children}</Text>,
};

export const Mono: StoryObj<typeof Text> = {
  render: ({ children, as }: any) => (
    <Text as={as} mono>
      {children}
    </Text>
  ),
};
