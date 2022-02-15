import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type PrimaryButtonProps = BaseButtonProps;

// const colors = {

// }

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({ children, color = 'gray', className, ...rest }, ref) => {
  let isWhite = color === 'white';
  let bgcolor = isWhite ? 'bg-white' : `bg-${color}-600`;
  let textcolor = isWhite ? 'text-gray-800' : 'text-white';
  let hoverClass = isWhite ? 'hover:bg-gray-100' : `hover:bg-${color}-700`;
  return (
    <BaseButton
      ref={ref}
      className={clsx(bgcolor, textcolor, hoverClass, className)}
      color={isWhite ? 'gray' : color}
      {...rest}
    >
      {children}
    </BaseButton>
  );
});
