import React, { useState } from "react";
import { StoryObj } from "@storybook/react";
import { Box, Drawer, PrimaryButton } from "@edgmont-ui/react";

export default {
  title: "Navigation/Drawer",
  component: Drawer,
};

export const Example: StoryObj<typeof Drawer> = {
  render: ({ ...rest }) => {
    let [open, setOpen] = useState(false);
    return (
      <>
        <Box display="grid" height="100vh" style={{ placeContent: "center" }}>
          <PrimaryButton onClick={() => setOpen(!open)}>
            Open Drawer
          </PrimaryButton>
        </Box>
        <Drawer {...rest} open={open} handleClose={() => setOpen(false)}>
          <Box p="4">This is a drawer</Box>
        </Drawer>
      </>
    );
  },
};
