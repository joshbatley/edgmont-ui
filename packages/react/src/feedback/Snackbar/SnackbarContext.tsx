import { useContext, createContext } from 'react';
import { SnackContext } from '../../types/Snackbar';

export const SnackbarContext = createContext<SnackContext | undefined>(undefined);

export const useSnackbar = () => {
  let context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbarCtx must be used within a SnackbarContext provider');
  }

  return context;
};

