import React from 'react';
import classNames from 'classnames';
import { Loader } from 'atoms/Loader';

export type BaseButtonProps = {
  size?: Size,
  variant?: Variant,
  color?: Colors,
  isLoading?: boolean,
} & React.ComponentPropsWithRef<'button'>;

const defaultClasses = 'group inline-flex items-center justify-center space-x-2 rounded-md transition focus:outline-none focus:ring';

const disabledClasses = 'filter grayscale cursor-not-allowed';
const isLoadingClasses = 'cursor-wait';

function sizingClasses(size?: Size): string {
  switch (size) {
    case 'large': return 'px-10 py-4 text-lg font-medium';
    default:
    case 'medium':
      return 'px-4 py-2 text-sm font-medium';
    case 'small': return 'px-2 py-1 text-sm font-normal';
    case 'none': return '';
  }
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children, size, variant = 'button', isLoading, color = 'gray', disabled, className, ref, ...args
}) => {
  let sizing = sizingClasses(size);
  let classes = classNames(
    defaultClasses,
    sizing,
    className,
    { [disabledClasses]: disabled },
    { [isLoadingClasses]: isLoading },
  );
  return (
    <button type={variant} ref={ref} disabled={isLoading || disabled} className={classes} {...args}>
      {isLoading && (<Loader color={color} height={16} width={16} />)}
      {children}
    </button>
  );
};
