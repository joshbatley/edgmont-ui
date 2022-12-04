import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ButtonProps = Omit<BaseButtonProps, 'color'> & { darkMode?: boolean };

const StyledButton = styled(BaseButton) <ButtonProps>`
  background: transparent;
  color: ${({ theme, darkMode }) => darkMode ? theme.colors.white : theme.colors.base};
  :disabled {
    color: ${({ theme }) => theme.colors.baseLight};
  }
  :hover {
    background: ${({ theme }) => rgba(theme.colors.gray, 0.3)};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...rest }, ref) => (
  <StyledButton
    ref={ref}
    loaderColor="white"
    {...rest}
  >
    {children}
  </StyledButton>
));

