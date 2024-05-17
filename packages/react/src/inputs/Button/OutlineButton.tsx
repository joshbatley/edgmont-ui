import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <OutlineButtonProps>`
  :disabled {
    background: ${({ theme }) => theme.colors.background};
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
    color="base"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
