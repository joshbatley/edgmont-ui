import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { Box, TextComp } from '../../data';
import { ClickableElement, OutlineButton, OutlineButtonProps } from '../Button';
import { useSelectContext } from './SelectContext';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  placeholder?: string;
} & OutlineButtonProps;

const ClearBtn = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-right: 3px;
  :hover {
    color: ${({ theme }) => theme.colors.foreground};
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
  isClearable,
  children,
  isFilterable,
  placeholder,
  ...rest
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
      bg="background"
      justifyContent="space-between"
      {...getToggleButtonProps()}
      {...rest}
    >
      <TextComp fontSize="1" lineHeight="1">{buttonText}</TextComp>
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
