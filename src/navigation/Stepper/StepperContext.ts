import React, { useContext } from 'react';
import { StepContext } from '.';

export const StepperContext = React.createContext<StepContext | undefined>(undefined);

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error('useStepperContext must be used within a StepperContext provider');
  }

  return context;
};
