import classNames from 'classnames';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type SecondaryButtonProps = BaseButtonProps;

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, color, ...args }) => {
  let bgcolor = `bg-${color}-100`;
  let textcolor = `text-${color}-700`;
  let hoverClass = `hover:bg-${color}-200`;
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass)}
      color={color}
      {...args}
    >
      {children}
    </BaseButton>
  );
};
