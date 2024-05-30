import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ClickableElementProps = BaseButtonProps & React.ComponentPropsWithRef<'button'>;

export const ClickableElement = forwardRef<HTMLButtonElement, ClickableElementProps>(({ children, ...rest }, ref) => (
  <BaseButton
    padding="0"
    fontWeight="inherit"
    lineHeight="inherit"
    fontSize="inherit"
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton>
));
