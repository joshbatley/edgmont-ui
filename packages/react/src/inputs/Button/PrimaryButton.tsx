import { forwardRef } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type PrimaryButtonProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

const StyledButton = styled(BaseButton) <PrimaryButtonProps>`
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.8;
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
