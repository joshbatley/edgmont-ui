import React, { useMemo } from 'react';
import classNames from 'classnames';
import { ListItem } from 'data';
import { useSelectContext } from '.';

export type SelectItemProps = {
  item: any;
  index: number;
};

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

  let classes = classNames('cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100', { 'bg-gray-200 ': selectedItem === item || itemToString(SelectItem) === memoValue },
  );

  return (
    <ListItem
      className={classes}
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
