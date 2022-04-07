import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '.';

export type SecondaryButtonProps = BaseButtonProps;

const classes: Record<ColorsAndWhite, string> = {
  primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
  gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  green: 'bg-green-100 text-green-700 hover:bg-green-200',
  lime: 'bg-lime-100 text-lime-700 hover:bg-lime-200',
  red: 'bg-red-100 text-red-700 hover:bg-red-200',
  yellow: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
  blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
  purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
  pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
  white: 'bg-white text-gray-900 hover:bg-gray-100',
};

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(({
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

