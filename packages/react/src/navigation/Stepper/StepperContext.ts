import React, { useContext } from 'react';

export const StepperContext = React.createContext<StepContext | undefined>(undefined);

export const useStepperContext = () => {
  let context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error('useStepperContext must be used within a StepperContext provider');
  }

  return context;
};
