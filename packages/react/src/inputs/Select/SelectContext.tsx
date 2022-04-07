import React, { useContext } from 'react';
import { ControllerStateAndHelpers } from 'downshift';

export const SelectContext = React.createContext<ControllerStateAndHelpers<any> | undefined>(undefined);

export const useSelectContext = () => {
  let context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error('useSelectContext must be used within a SelectContext provider');
  }

  return context;
};
