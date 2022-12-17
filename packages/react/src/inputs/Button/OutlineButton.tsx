import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <OutlineButtonProps>`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.base};
  border: ${({ theme }) => theme.borders.gray[1]};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  :disabled {
    background:${({ theme }) => theme.colors.gray};
  }
  :hover {
    background: ${({ theme }) => theme.colors.offwhite};
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
