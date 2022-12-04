import React, { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ClickableElementProps = Omit<BaseButtonProps, 'size' | 'color' | 'isLoading'>;

export const ClickableElement = forwardRef<HTMLButtonElement, ClickableElementProps>(({ children, ...rest }, ref) => (
  <BaseButton
    size="none"
    loaderColor="gray"
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton>
));
