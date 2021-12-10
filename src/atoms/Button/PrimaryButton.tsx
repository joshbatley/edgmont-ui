import classNames from 'classnames';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, color, ...args }) => {
  let isWhite = color === 'white';
  let bgcolor = isWhite ? 'bg-white' : `bg-${color}-600`;
  let textcolor = isWhite ? 'text-gray-800' : 'text-white';
  let hoverClass = isWhite ? 'hover:bg-gray-100' : `hover:bg-${color}-700`;
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass)}
      color={isWhite ? 'gray' : color}
      {...args}
    >
      {children}
    </BaseButton>
  );
};
