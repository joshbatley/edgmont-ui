import { forwardRef } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type DestructiveButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <DestructiveButtonProps>`
  :hover {
    background: ${({ theme }) => darken(0.1, theme.colors.destructive)};
  }
  :disabled {
    opacity: 0.8;
  }
`;

export const DestructiveButton = forwardRef<HTMLButtonElement, DestructiveButtonProps>(({
  children, ...rest
}, ref) => (
  <StyledButton
    color="destructiveForeground"
    bg="destructive"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
