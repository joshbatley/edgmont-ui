import React from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from './BaseButton';

type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, color = 'gray', className, ...rest }) => {
  let isWhite = color === 'white';
  let bgcolor = isWhite ? 'bg-white' : `bg-${color}-600`;
  let textcolor = isWhite ? 'text-gray-800' : 'text-white';
  let hoverClass = isWhite ? 'hover:bg-gray-100' : `hover:bg-${color}-700`;
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass, className)}
      color={isWhite ? 'gray' : color}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
