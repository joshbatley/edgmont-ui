import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type HighlightButtonProps = Omit<BaseButtonProps, 'color'> & { darkMode?: boolean };

export const HighlightButton = forwardRef<HTMLButtonElement, HighlightButtonProps>(({ children, className, darkMode, ...rest }, ref) => (
  <BaseButton
    className={clsx(
      'bg-transparent disabled:text-gray-300 hover:bg-gray-300 hover:bg-opacity-30',
      darkMode ? 'text-white' : 'text-gray-900',
      className,
    )}
    ref={ref}
    color="gray"
    {...rest}
  >
    {children}
  </BaseButton>
));

