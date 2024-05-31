import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Drawer, PrimaryButton } from '@edgmont-ui/react';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
};

export const Showcase: StoryObj<typeof Drawer> = {
  render: ({ ...rest }) => {
    let [open, setOpen] = useState<string>('');
    return (
      <>
        <Box display="grid" height="100vh" style={{ placeContent: 'center' }}>
          <PrimaryButton onClick={() => setOpen('left')}>
            Open Drawer Left
          </PrimaryButton>
          <br />
          <PrimaryButton onClick={() => setOpen('right')}>
            Open Drawer right
          </PrimaryButton>
        </Box>
        <Drawer {...rest} open={open === 'left'} direction="left" handleClose={() => setOpen('')}>
          <Box p="4">This is a drawer</Box>
        </Drawer>
        <Drawer {...rest} open={open === 'right'} direction="right" handleClose={() => setOpen('')}>
          <Box p="4">This is a drawer</Box>
        </Drawer>
      </>
    );
  },
};
