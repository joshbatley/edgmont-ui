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

export const Showcase: StoryObj = {
  render: ({ ...rest }) => (
    <SnackbarProvider {...rest}>
      <Box display="flex" width="500px" justifyContent="space-between">
        <Comp destructive text="Add Destructive" />
        <Comp severity="warning" text="Add Warning" />
        <Comp text="Add with body" body={lorem} />
      </Box>
    </SnackbarProvider>
  ),
};
