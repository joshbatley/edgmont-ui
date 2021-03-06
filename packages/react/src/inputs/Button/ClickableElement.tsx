import React, { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from '.';

export type ClickableElementProps = Omit<BaseButtonProps, 'size' | 'color' | 'isLoading'>;

export const ClickableElement = forwardRef<HTMLButtonElement, ClickableElementProps>(({ children, ...rest }, ref) => (
  <BaseButton
    size="none"
    color="gray"
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton>
));
