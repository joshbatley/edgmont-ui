import classNames from 'classnames';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type HighlightButtonProps = BaseButtonProps & { darkMode?: boolean };

export const HighlightButton: React.FC<HighlightButtonProps> = ({ children, color, darkMode, ...args }) => {
  let bgcolor = 'bg-transparent';
  let textcolor = darkMode ? 'text-white' : 'text-gray-900';
  let hoverClass = 'hover:bg-gray-300 hover:bg-opacity-30';
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass)}
      color="gray"
      {...args}
    >
      {children}
    </BaseButton>
  );
};
