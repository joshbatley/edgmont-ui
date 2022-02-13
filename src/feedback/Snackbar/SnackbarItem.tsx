import React, { useEffect, useState } from 'react';
import { Slide } from 'utils';
import { Alert } from 'feedback';
import { Snack } from 'types/Snackbar';

export type SnackbarItemProps = {
  handleClose: () => void;
} & Snack;

export const SnackbarItem: React.FC<SnackbarItemProps> = ({
  body, handleClose, duration, title, persist, ...rest
}) => {
  let [open, setOpen] = useState(true);

  useEffect(() => {
    if (persist) {
      return;
    }
    let timeout = setTimeout(() => {
      setOpen(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, persist]);

  return (
    <Slide inProp={open} onDestroyed={handleClose}>
      <Alert
        className="my-1.5 mx-4"
        withClose={() => setOpen(false)}
        title={title}
        {...rest}
      >
        {body}
      </Alert>
    </Slide>
  );
};
