import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { Box, TextComp } from '../../data';
import { ClickableElement, OutlineButton, OutlineButtonProps } from '../Button';
import { useSelectContext } from './SelectContext';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  error?: boolean;
  placeholder?: string;
} & OutlineButtonProps;

const ClearBtn = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.foreground};
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
  error,
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
      bg="background.1"
      justifyContent="space-between"
      border={error ? 'error.1' : 'background3.1'}
      {...getToggleButtonProps()}
      {...rest}
    >
      <TextComp>{buttonText}</TextComp>
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
