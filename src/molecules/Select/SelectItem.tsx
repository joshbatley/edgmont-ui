import React, { useMemo } from 'react';
import { ListItem } from 'atoms/List';
import { useSelectContext } from './SelectContext';
import classNames from 'classnames';

type SelectItemProps = {
  item: any;
  index: number;
};

export const SelectItem: React.FC<SelectItemProps> = ({ children, item, index }) => {
  const {
    getItemProps,
    selectedItem,
    itemToString,
  } = useSelectContext();

  const itemText =
    children ||
    (itemToString && itemToString(item)) ||
    (item && item.value);

  const memoValue = useMemo(() => itemToString(item), [item, itemToString]);


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
