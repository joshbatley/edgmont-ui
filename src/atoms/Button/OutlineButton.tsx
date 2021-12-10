import classNames from 'classnames';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type OutlineButtonProps = BaseButtonProps;

export const OutlineButton: React.FC<OutlineButtonProps> = ({ children, color, ...args }) => {
  let bgcolor = 'border border-gray-300 bg-white shadow-sm';
  let textcolor = 'text-gray-700';
  let hoverClass = 'hover:bg-gray-100';
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass)}
      color="gray"
      {...args}
    >
      {children}
    </BaseButton >
  );
};
