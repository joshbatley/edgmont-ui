import React from 'react';
import clsx from 'clsx';
import Downshift, {
  DownshiftProps, DownshiftState, StateChangeOptions,
} from 'downshift';
import { SelectContext } from '.';

export type SelectProps = {
  disabled?: boolean;
  className?: string;
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

export const Select: React.FC<SelectProps> = ({ itemToString, className, children, ...rest }) => (
  <Downshift itemToString={itemToString} stateReducer={clearInputOnSelectItem} {...rest}>
    {(downshift) => (
      <div className={clsx(className, 'relative w-full')}>
        <SelectContext.Provider value={downshift}>
          {children}
        </SelectContext.Provider>
      </div>
    )}
  </Downshift>
);
