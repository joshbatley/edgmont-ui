import React from 'react';
import clsx from 'clsx';
import { ClickableElement, OutlineButton, OutlineButtonProps } from 'inputs';
import { Text } from 'data';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useSelectContext } from '.';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  error?: boolean;
} & OutlineButtonProps;

export const SelectButton: React.FC<SelectButtonProps> = ({
  isClearable, children, isFilterable, placeholder, error, ...rest
}) => {
  let {
    getToggleButtonProps, itemToString, selectedItem, clearSelection,
  } = useSelectContext();

  let buttonText = children ||
    (itemToString && itemToString(selectedItem)) ||
    (selectedItem && selectedItem.value) ||
    placeholder;

  let isClearableActive = isClearable && selectedItem;

  let clear = (e: any) => {
    e.stopPropagation();
    clearSelection();
  };

  return (
    <OutlineButton
      className={clsx('w-full justify-between', { 'border-red-400 shadow-sm shadow-red-200': error })}
      {...getToggleButtonProps()}
      {...rest}
    >
      <Text>{buttonText}</Text>
      <div className="flex space-x-4 items-center">
        {isClearableActive &&
          <ClickableElement as="a" onClick={clear} className="text-gray-400 hover:text-gray-800">
            Clear
          </ClickableElement>
        }
        <ChevronUpDownIcon height={16} width={16} />
      </div>
    </OutlineButton>
  );
};
