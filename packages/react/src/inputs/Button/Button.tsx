import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { darken } from 'polished';

export type ButtonProps = {
  active?: boolean;
} & BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <ButtonProps>`
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ theme, active }) => active ? theme.colors.accent : 'transparent'};
  :disabled {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
  :hover {
    background: ${({ theme, active }) => active ? darken(0.05, theme.colors.accent) : theme.colors.accent};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, color, ...rest }, ref) => (
  <StyledButton ref={ref} {...rest}>
    {children}
  </StyledButton>
));

