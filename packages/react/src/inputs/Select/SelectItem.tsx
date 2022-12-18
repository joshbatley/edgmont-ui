import React, { useMemo } from 'react';
import { ListItem } from 'data';
import { useSelectContext } from '.';
import styled from 'styled-components';

export type SelectItemProps = {
  item: any;
  index: number;
} & WithChildren;

const Item = styled(ListItem) <{ changeBg: boolean; }>`
  cursor: pointer;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  background: ${({ changeBg, theme }) => changeBg ? theme.colors.lightGray : 'inherit'};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;

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
    <Item
      changeBg={selectedItem === item || itemToString(SelectItem) === memoValue}
      {...getItemProps({
        key: item.value,
        item,
        index,
      })}
    >
      {itemText}
    </Item>
  );
};
