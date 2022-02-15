import React from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type SecondaryButtonProps = BaseButtonProps;

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, color = 'gray', ...rest }) => {
  let bgcolor = `bg-${color}-100`;
  let textcolor = `text-${color}-700`;
  let hoverClass = `hover:bg-${color}-200`;
  return (
    <BaseButton
      className={clsx(bgcolor, textcolor, hoverClass)}
      color={color}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
