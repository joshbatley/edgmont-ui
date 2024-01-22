import React from "react";
import { StoryObj } from "@storybook/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Box, Image } from "@edgmont-ui/react";

export default {
  title: "Data/Image",
  component: Image,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const fallback = (
  <Box
    width="12"
    height="12"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="baseHighlight"
    borderRadius="2"
    bg="background.2"
  >
    <PhotoIcon width={30} height={30} />
  </Box>
);

export const Example: StoryObj = {
  render: () => (
    <div>
      <div>
        Broken Image with fallback
        <Image
          width="200"
          height="200"
          fallback={fallback}
          src="https://brokenUrl.xyz/NotAImage.png"
        />
      </div>
      <div>
        Working Image with fallback
        <Image
          width="200"
          height="200"
          fallback={fallback}
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
      </div>
    </div>
  ),
};
