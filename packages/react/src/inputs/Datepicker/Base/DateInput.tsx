import React, { forwardRef } from 'react';
import { ClickableElement, OutlineButton } from '../../../inputs/Button';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { Text } from '../../../data';
import styled from 'styled-components';

export type DateInputProps = {
  placeholder?: string;
  value?: string | null;
  onClick: () => void;
  clear?: () => void;
  showClear?: boolean;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: ${({ theme }) => theme.space[4]};
    margin-right:${({ theme }) => theme.space[4]};
  }
`;

const Icon = styled(CalendarIcon)`
  color: ${({ theme }) => theme.colors.baseHighlight};
  margin-right: ${({ theme }) => theme.space[2]};
`;

const ClearBtn = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.baseHighlight};
  :hover {
    color: ${({ theme }) => theme.colors.base};
  }
`;

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(({ value, placeholder, onClick, clear, showClear }, ref) => {
  let handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clear?.();
  };

  let displayValue = value ?
    (<Text as="span" color="base">{value}</Text>) :
    (<Text as="span" color="baseHighlight">{placeholder}</Text>);

  return (
    <OutlineButton bg="background.1" width="100%" justifyContent="space-between" ref={ref} onClick={onClick} >
      <Container>
        <Icon width={16} height={16} />
        {displayValue}
      </Container>
      {
        showClear && value && (
          <ClearBtn onClick={handleClear} as="a">
            Clear
          </ClearBtn>
        )
      }
    </OutlineButton >
  );
});

