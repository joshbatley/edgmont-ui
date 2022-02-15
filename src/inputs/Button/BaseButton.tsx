import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { CircleLoader } from 'feedback';

export type BaseButtonProps = {
  size?: Size,
  color?: ColorsAndShades;
  isLoading?: boolean,
  as?: React.ElementType,
} & React.ComponentPropsWithoutRef<'button'>;

const sizingClasses = (size?: Size) => {
  switch (size) {
    case 'large': return 'px-10 py-4 text-lg font-medium';
    default:
    case 'medium':
      return 'px-3 py-2 text-sm font-medium';
    case 'small': return 'px-2 py-1 text-sm font-normal';
    case 'none': return '';
  }
};

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, size, isLoading, color = 'gray', disabled, className, as: Component = 'button', ...rest
}, ref) => {
  let classes = clsx(
    'group inline-flex items-center space-x-2 rounded-md select-none transition focus:outline-none focus:ring',
    sizingClasses(size),
    { 'filter grayscale cursor-not-allowed': disabled },
    { 'cursor-wait': isLoading },
    className,
  );

  return (
    <Component ref={ref} disabled={isLoading || disabled} className={classes} {...rest}>
      {isLoading && (<CircleLoader color={color} height={16} width={16} />)}
      {children}
    </Component>
  );
});
