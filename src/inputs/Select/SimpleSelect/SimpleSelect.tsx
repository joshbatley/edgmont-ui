import { ControllerStateAndHelpers, DownshiftProps } from 'downshift';
import React, { useState } from 'react';
import { Select, SelectFilter, SelectButton, SelectList, SelectItem } from '..';

type SimpleSelectProps = {
  values: Array<any>;
  placeholder?: string;
  error?: boolean
  disabled?: boolean;
  isClearable?: boolean;
  isFilterable?: boolean;
  itemToString?: (item: any) => string;
} & DownshiftProps<any>;

export const SimpleSelect: React.FC<SimpleSelectProps> = ({
  values, isFilterable, disabled, error, isClearable, placeholder, onInputValueChange,
  itemToString = (item): string => item || '',
  ...rest
}) => {
  let [filter, setFilter] = useState<string>('');
  const filterOptions = values.filter(item => itemToString(item).toLowerCase().includes(filter));

  function handleOnputValueChange(inputValue: string, stateAndHelpers: ControllerStateAndHelpers<any>) {
    if (onInputValueChange) {
      onInputValueChange(inputValue, stateAndHelpers);
    }
    setFilter(inputValue);
  }

  return (
    <Select onInputValueChange={handleOnputValueChange} itemToString={itemToString} {...rest}>
      {isFilterable ?
        <SelectFilter disabled={disabled} error={error} isClearable={isClearable} placeholder={placeholder} /> :
        <SelectButton disabled={disabled} error={error} isClearable={isClearable} placeholder={placeholder} />
      }
      <SelectList>
        {filterOptions.map((item, idx) => (
          <SelectItem item={item} index={idx} key={`key_${JSON.stringify(item)}`} />
        ))}
      </SelectList>
    </Select>
  );
};
