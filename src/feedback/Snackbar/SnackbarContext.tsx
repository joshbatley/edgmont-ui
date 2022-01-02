import React, { useContext } from 'react';
import { SnackContext } from '.';

export const SnackbarContext = React.createContext<SnackContext | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbarCtx must be used within a SnackbarContext provider');
  }

  return context;
};
