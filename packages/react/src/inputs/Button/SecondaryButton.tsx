import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type SecondaryButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <SecondaryButtonProps>`
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.8;
  }
`;

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(({
  children, ...rest
}, ref) => (
  <StyledButton
    color="secondaryForeground"
    bg="secondary"
    ref={ref}
    {...rest}
  >
    {children}
  </StyledButton>
));
