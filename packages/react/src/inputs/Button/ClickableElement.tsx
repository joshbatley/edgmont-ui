import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ClickableElementProps = Omit<BaseButtonProps, | 'isLoading'>;

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
