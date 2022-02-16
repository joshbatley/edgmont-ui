import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type PrimaryButtonProps = BaseButtonProps;

const classes: Record<ColorsAndWhite, string> = {
  primary: 'text-white bg-primary-600 hover:bg-primary-700',
  gray: 'text-white bg-gray-600 hover:bg-gray-700',
  green: 'text-white bg-green-600 hover:bg-green-700',
  lime: 'text-white bg-lime-600 hover:bg-lime-700',
  red: 'text-white bg-red-600 hover:bg-red-700',
  yellow: 'text-white bg-yellow-400 hover:bg-yellow-700',
  blue: 'text-white bg-blue-600 hover:bg-blue-700',
  purple: 'text-white bg-purple-600 hover:bg-purple-700',
  orange: 'text-white bg-orange-600 hover:bg-orange-700',
  pink: 'text-white bg-pink-600 hover:bg-pink-700',
  white: 'text-gray-800 bg-white hover:bg-gray-100',
};

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  children, color = 'primary', className, ...rest
}, ref) => (
  <BaseButton
    ref={ref}
    className={clsx(classes[color], className)}
    color={color === 'white' ? 'gray' : color}
    {...rest}
  >
    {children}
  </BaseButton>
));
