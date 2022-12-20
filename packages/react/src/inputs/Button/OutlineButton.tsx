import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from 'inputs/Button/BaseButton';

export type OutlineButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <OutlineButtonProps>`
  background: ${({ theme }) => theme.colors.background[0]};
  color: ${({ theme }) => theme.colors.base};
  border: ${({ theme }) => theme.borders.background3[1]};
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  :disabled {
    background:${({ theme }) => theme.colors.background[2]};
  }
  :hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background[1]};
  }
`;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, ...rest }, ref) => (
  <StyledButton
    loaderColor="gray"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton >
));
