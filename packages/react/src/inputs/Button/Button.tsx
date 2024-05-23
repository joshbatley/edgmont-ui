import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ButtonProps = {
  active?: boolean;
} & Omit<BaseButtonProps, ''>;

const StyledButton = styled(BaseButton) <ButtonProps>`
  color: ${({ theme, active }) => active ? theme.colors.background : theme.colors.foreground};
  background: ${({ theme, active }) => active ? theme.colors.foreground : theme.colors.background};
  :disabled {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
  :hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color, ...rest }, ref) => (
  <StyledButton ref={ref} {...rest}>
    {children}
  </StyledButton>
));

