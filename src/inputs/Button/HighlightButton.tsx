import React from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from '.';

export type HighlightButtonProps = BaseButtonProps & { darkMode?: boolean };

export const HighlightButton: React.FC<HighlightButtonProps> = ({ children, className, color, darkMode, ...rest }) => {
  let bgcolor = 'bg-transparent disabled:text-gray-300';
  let textcolor = darkMode ? 'text-white' : 'text-gray-900';
  let hoverClass = 'hover:bg-gray-300 hover:bg-opacity-30';
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass, className)}
      color="gray"
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
