import React from 'react';
import Downshift, {
  DownshiftProps, DownshiftState, StateChangeOptions,
} from 'downshift';
import { Box } from '../../data';
import { SelectContext } from './SelectContext';
import {WithChildren} from "../../types";

export type SelectProps = {
  disabled?: boolean;
} & Omit<DownshiftProps<any>, 'children'> & WithChildren;

export const clearInputOnSelectItem = (state: DownshiftState<any>, changes: StateChangeOptions<any>) => {
  if (changes.type === Downshift.stateChangeTypes.clickButton) {
    return {
      ...changes,
      inputValue: '',
    };
  }
  return changes;
};

export const Select: React.FC<SelectProps> = ({ itemToString, children, ...rest }) => (
  <Downshift itemToString={itemToString} stateReducer={clearInputOnSelectItem} {...rest}>
    {({ getRootProps, ...downshift }) => (
      <Box position="relative" width="100%" {...getRootProps()}>
        <SelectContext.Provider value={{ ...downshift, ...getRootProps() }}>
          {children}
        </SelectContext.Provider>
      </Box>
    )}
  </Downshift>
);
