import { StoryObj } from '@storybook/react';
import { Box, Typography } from '@edgmont-ui/react';
import { Backdrop } from '@edgmont-ui/react';

export default {
  title: 'Utils/Backdrop',
  component: Backdrop,
};

export const Showcase: StoryObj<typeof Backdrop> = {
  render: () => {
    return (
      <Backdrop onClick={() => { }}>
        <Box bg="background" height="40%" width="40%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" spaceYBetween="5">
          <Typography>Escape key or click the backdrop</Typography>
        </Box>
      </Backdrop>
    );
  },
};
