import React from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type HighlightButtonProps = BaseButtonProps & { darkMode?: boolean };

export const HighlightButton: React.FC<HighlightButtonProps> = ({ children, className, color, darkMode, ...rest }) => (
  <BaseButton
    className={clsx(
      'bg-transparent disabled:text-gray-300 hover:bg-gray-300 hover:bg-opacity-30',
      darkMode ? 'text-white' : 'text-gray-900',
      className,
    )}
    color="gray"
    {...rest}
  >
    {children}
  </BaseButton>
);

