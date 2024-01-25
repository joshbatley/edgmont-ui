import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = Omit<BaseButtonProps, 'color'>;

const StyledButton = styled(BaseButton) <OutlineButtonProps>`
  :disabled {
    background:${({ theme }) => theme.colors.background[2]};
  }
  :hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background[1]};
  }
`;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, ...rest }, ref) => (
  <StyledButton
    backgroundColor="background.0"
    border="background3.1"
    color="base"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
