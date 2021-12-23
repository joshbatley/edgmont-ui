import React from 'react';
import { ClickableElement, OutlineButton, OutlineButtonProps } from 'inputs/Button';
import { useSelectContext } from './SelectContext';
import { SelectorIcon } from 'atoms/Icons/Outline';
import { Text } from 'atoms';
import classNames from 'classnames';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  error?: boolean;
} & OutlineButtonProps;

export const SelectButton: React.FC<SelectButtonProps> = ({
  isClearable, children, isFilterable, placeholder, error, ...args
}) => {
  const {
    getToggleButtonProps, itemToString, selectedItem, clearSelection,
  } = useSelectContext();

  const buttonText =
    children ||
    (itemToString && itemToString(selectedItem)) ||
    (selectedItem && selectedItem.value) ||
    placeholder;

  let isClearableActive = isClearable && selectedItem;

  function clear(e: any) {
    e.stopPropagation();
    clearSelection();
  }

  let classes = classNames('w-full justify-between', { 'border-red-400 shadow-sm shadow-red-200': error });

  return (
    <OutlineButton className={classes} {...getToggleButtonProps()} {...args}>
      <Text>{buttonText}</Text>
      <div className="flex space-x-4 items-center">
        {isClearableActive &&
          <ClickableElement as="a" onClick={clear} className="text-gray-400 hover:text-gray-800">
            Clear
          </ClickableElement>
        }
        <SelectorIcon height={16} width={16} />
      </div>
    </OutlineButton>
  );
};
