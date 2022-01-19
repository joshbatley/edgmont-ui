import React from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type SecondaryButtonProps = BaseButtonProps;

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, color = 'gray', ...rest }) => {
  let bgcolor = `bg-${color}-100`;
  let textcolor = `text-${color}-700`;
  let hoverClass = `hover:bg-${color}-200`;
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass)}
      color={color}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
