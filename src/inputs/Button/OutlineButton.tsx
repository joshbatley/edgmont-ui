import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type OutlineButtonProps = BaseButtonProps;

export const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(({ children, className, color, ...rest }, ref) => {
  let bgcolor = 'border border-gray-300 bg-white shadow-sm disabled:bg-gray-100';
  let textcolor = 'text-gray-700';
  let hoverClass = 'hover:bg-gray-100';
  return (
    <BaseButton
      className={classNames(bgcolor, textcolor, hoverClass, className)}
      color="gray"
      ref={ref}
      {...rest}
    >
      {children}
    </BaseButton >
  );
});
