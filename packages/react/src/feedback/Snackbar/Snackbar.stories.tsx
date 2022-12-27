import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { intercardinalPointsSelect } from 'storybook-helpers/presets';
import { OutlineButton } from 'inputs';
import { Snack } from 'types/Snackbar';
import { SnackbarProvider, useSnackbar } from '.';
import { Box } from 'data';

export default {
  title: 'Feedback/Snackbar',
  args: {
    max: 3,
    autoHideDuration: 6000,
  },
  argTypes: {
    anchor: intercardinalPointsSelect,
  },
} as Meta;

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet imperdiet nunc non porttitor. Morbi vitae venenatis mauris. Nam malesuada ipsum mi, sed maximus nulla rhoncus sit amet.';

const Comp: React.FC<Snack> = ({
  text = 'Add Snackbar', title = 'Your notification here', ...rest
}) => {
  let { enqueue } = useSnackbar();
  return (
    <OutlineButton onClick={() => enqueue(title, rest)}>{text}</OutlineButton>
  );
};

export const Example: Story = ({ ...rest }) => (
  <SnackbarProvider {...rest}>
    <Box display="grid" height="100vh" style={{ placeContent: 'center' }}>
      <Comp />
    </Box>
  </SnackbarProvider>
);

export const Varients: Story = ({ ...rest }) => (
  <SnackbarProvider {...rest} max={7}>
    <Box spaceYBetween="2" display="grid" height="100vh" style={{ placeContent: 'center' }}>
      <Box display="flex" justifyContent="space-between" >
        <Comp severity="error" text="Add Error" />
        <Comp severity="warning" text="Add Warning" />
        <Comp severity="info" text="Add Info" />
      </Box>
      <Box spaceXBetween="4" display="flex" justifyContent="space-between" >
        <Comp severity="success" text="Add Success" />
        <Comp text="Add normal" />
        <Comp text="With body" body={lorem} />
      </Box>

    </Box>
  </SnackbarProvider>
);
