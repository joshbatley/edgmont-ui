import React, { useEffect, useState } from 'react';
import { Slide } from 'utils';
import { Alert } from 'feedback';
import { Snack } from 'types/Snackbar';
import styled from 'styled-components';

export type SnackbarItemProps = {
  handleClose: () => void;
} & Snack;

const StyledAlert = styled(Alert)`
  margin: ${({ theme }) => `${theme.space[1]} ${theme.space[4]}`};
`;

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
      <StyledAlert
        withClose={() => setOpen(false)}
        title={title}
        {...rest}
      >
        {body}
      </StyledAlert>
    </Slide>
  );
};
