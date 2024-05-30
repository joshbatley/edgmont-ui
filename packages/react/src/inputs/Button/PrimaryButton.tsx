import { forwardRef } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type PrimaryButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <PrimaryButtonProps>`
  :hover {
    background: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
  :disabled {
    background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  }
`;

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  children, ...rest
}, ref) => (
  <StyledButton
    color="background"
    bg="primary"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
