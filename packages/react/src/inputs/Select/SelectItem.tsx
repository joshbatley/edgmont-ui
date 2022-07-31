import React, { useMemo } from 'react';
import clsx from 'clsx';
import { ListItem } from 'data';
import { useSelectContext } from '.';

export type SelectItemProps = {
  item: any;
  index: number;
} & WithChildren;

export const SelectItem: React.FC<SelectItemProps> = ({ children, item, index }) => {
  let {
    getItemProps,
    selectedItem,
    itemToString,
  } = useSelectContext();

  let itemText = children ||
    (itemToString && itemToString(item)) ||
    (item && item.value);

  let memoValue = useMemo(() => itemToString(item), [item, itemToString]);

  return (
    <ListItem
      className={clsx(
        'cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100',
        { 'bg-primary-100 ': selectedItem === item || itemToString(SelectItem) === memoValue },
      )}
      {...getItemProps({
        key: item.value,
        item,
        index,
      })}
    >
      {itemText}
    </ListItem>
  );
};
