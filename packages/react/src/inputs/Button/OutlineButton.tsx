import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <OutlineButtonProps>`
  :disabled {
    background: ${({ theme }) => theme.colors.accent};
  }
  :hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, ...rest }, ref) => (
  <StyledButton
    backgroundColor="background"
    boxShadow="base.0"
    border="border.1"
    color="foreground"
    lineHeight="18px"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
