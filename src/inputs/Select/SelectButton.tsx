import React from 'react';
import classNames from 'classnames';
import { ClickableElement, OutlineButton, OutlineButtonProps } from 'inputs';
import { Text } from 'data';
import { SelectorIcon } from 'feedback/Icons/Outline';
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

  let classes = classNames('w-full justify-between', { 'border-red-400 shadow-sm shadow-red-200': error });

  return (
    <OutlineButton className={classes} {...getToggleButtonProps()} {...rest}>
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
