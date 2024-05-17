import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <ButtonProps>`
  color: ${({ theme }) => theme.colors.foreground};
  :disabled {
    color: ${({ theme }) => theme.colors.background};
  }
  :hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...rest }, ref) => (
  <StyledButton ref={ref} {...rest}>
    {children}
  </StyledButton>
));

