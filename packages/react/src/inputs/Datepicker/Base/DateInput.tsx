import { forwardRef } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { ClickableElement, OutlineButton } from '../../../inputs/Button';
import { Typography } from '../../../data';

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
    margin-left: ${({ theme }) => theme.space[1]};
    margin-right:${({ theme }) => theme.space[4]};
  }
`;

const Icon = styled(CalendarIcon)`
  color: ${({ theme }) => theme.colors.foreground};
  margin-right: ${({ theme }) => theme.space[2]};
`;

const ClearBtn = styled(ClickableElement)`
  color: ${({ theme }) => theme.colors.foreground};
  :hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(({
  value,
  placeholder,
  onClick,
  clear,
  showClear,
}, ref) => {
  let handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clear?.();
  };

  let displayValue = value ?
    (<Typography as="span">{value}</Typography>) :
    (<Typography as="span" color="mutedForeground">{placeholder}</Typography>);

  return (
    <OutlineButton bg="background" width="100%" fontWeight="400" lineHeight="inherit" justifyContent="space-between" ref={ref} onClick={onClick}>
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
    </OutlineButton>
  );
});

