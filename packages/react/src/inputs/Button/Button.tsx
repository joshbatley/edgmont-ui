import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <ButtonProps>`
  color: ${({ theme }) => theme.colors.base};
  :disabled {
    color: ${({ theme }) => theme.colors.background[3]};
  }
  :hover {
    background: ${({ theme }) => rgba(theme.colors.background[3], 0.3)};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...rest }, ref) => (
  <StyledButton
    ref={ref}
    loaderColor="white"
    {...rest}
  >
    {children}
  </StyledButton>
));

