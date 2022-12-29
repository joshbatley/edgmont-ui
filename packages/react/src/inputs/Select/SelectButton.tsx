import React from 'react';
import { ClickableElement, OutlineButton, OutlineButtonProps } from '../Button';
import { Box, Text } from '../../data';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useSelectContext } from './SelectContext';
import styled from 'styled-components';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  error?: boolean;
} & OutlineButtonProps;

const ClearBtn = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.baseHighlight};
  :hover {
    color: ${({ theme }) => theme.colors.base};
  }
`;

const Container = styled(Box)`
  > {
    margin-right: ${({ theme }) => theme.space[4]};
  }
  > :last-child {
    margin-right: 0;
  }
`;

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
      width="100%"
      bg="background.1"
      justifyContent="space-between"
      border={error ? 'error.1' : 'background3.1'}
      {...getToggleButtonProps()}
      {...rest}
    >
      <Text>{buttonText}</Text>
      <Container display="flex" alignItems="center">
        {isClearableActive &&
          <ClearBtn as="a" onClick={clear}>
            Clear
          </ClearBtn>
        }
        <ChevronUpDownIcon height={16} width={16} />
      </Container>
    </OutlineButton>
  );
};
