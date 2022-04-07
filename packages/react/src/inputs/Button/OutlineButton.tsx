import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type OutlineButtonProps = Omit<BaseButtonProps, 'color'>;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, className, ...rest }, ref) => (
  <BaseButton
    className={clsx(
      'border border-gray-300 bg-white shadow-sm disabled:bg-gray-100 text-gray-700 hover:bg-gray-100',
      className,
    )}
    color="gray"
    ref={ref}
    {...rest}
  >
    {children}
  </BaseButton >
));
