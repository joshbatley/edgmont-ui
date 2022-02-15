import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { intercardinalPointsSelect } from 'storybook-helpers/presets';
import { OutlineButton } from 'inputs';
import { Snack } from 'types/Snackbar';
import { SnackbarProvider, useSnackbar } from '.';

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

export const Default: Story = ({ ...rest }) => (
  <SnackbarProvider {...rest}>
    <div className='grid h-screen place-content-center'>
      <Comp />
    </div>
  </SnackbarProvider>
);

export const Varients: Story = ({ ...rest }) => (
  <SnackbarProvider {...rest} max={7}>
    <div className="space-y-2 grid h-screen place-content-center">
      <div className="space-x-2">
        <Comp severity="error" text="Add Error" />
        <Comp severity="warning" text="Add Warning" />
        <Comp severity="info" text="Add Info" />
      </div>
      <div className="space-x-2">
        <Comp severity="success" text="Add Success" />
        <Comp text="Add normal" />
        <Comp dark text="Add Dark" />
      </div>
      <div>

        <Comp text="With body" body={lorem} />
      </div>
    </div>
  </SnackbarProvider>
);
