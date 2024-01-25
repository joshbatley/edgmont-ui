import React from 'react';
import { StoryObj } from '@storybook/react';
import {
  Box,
  OutlineButton,
  SnackbarProvider,
  useSnackbar,
} from '@edgmont-ui/react';
import { intercardinalPointsSelect } from './presets';
import { Snack } from '@edgmont-ui/react/src/types';

export default {
  title: 'Feedback/Snackbar',
  args: {
    max: 3,
    autoHideDuration: 6000,
  },
  argTypes: {
    anchor: intercardinalPointsSelect,
  },
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet imperdiet nunc non porttitor. Morbi vitae venenatis mauris. Nam malesuada ipsum mi, sed maximus nulla rhoncus sit amet.';

const Comp: React.FC<Snack> = ({
  text = 'Add Snackbar',
  title = 'Your notification here',
  ...rest
}) => {
  let { enqueue } = useSnackbar();
  return (
    <OutlineButton onClick={() => enqueue(title, rest)}>{text}</OutlineButton>
  );
};

export const Example: StoryObj = {
  render: ({ ...rest }) => (
    <SnackbarProvider {...rest}>
      <Box display="grid" height="100vh" style={{ placeContent: 'center' }}>
        <Comp />
      </Box>
    </SnackbarProvider>
  ),
};

export const Varients: StoryObj = {
  render: ({ ...rest }) => (
    <SnackbarProvider {...rest} max={7}>
      <Box
        spaceYBetween="2"
        display="grid"
        height="100vh"
        style={{ placeContent: 'center' }}
      >
        <Box display="flex" justifyContent="space-between">
          <Comp severity="error" text="Add Error" />
          <Comp severity="warning" text="Add Warning" />
          <Comp severity="info" text="Add Info" />
        </Box>
        <Box spaceXBetween="4" display="flex" justifyContent="space-between">
          <Comp severity="success" text="Add Success" />
          <Comp text="Add normal" />
          <Comp text="With body" body={lorem} />
        </Box>
      </Box>
    </SnackbarProvider>
  ),
};
