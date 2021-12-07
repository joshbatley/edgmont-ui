import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Loader } from 'atoms/Loader';

export type BaseButtonProps = {
  children?: React.ReactNode,
  className?: string,
  size?: Size,
  variant?: Variant,
  color?: Colors,
  isLoading?: boolean,
  disabled?: boolean
};

const defaultClasses = `
  group
  inline-flex
  items-center
  justify-center
  space-x-2 px-4 py-2
  rounded-md
  font-medium
  text-sm
  border
  border-transparent
`;

const disabledClasses = 'filter grayscale cursor-not-allowed';
const isLoadingClasses = 'cursor-wait';

export const BaseButton: React.FC<BaseButtonProps> = ({
  children, size, variant, isLoading, color = 'gray', disabled, className, ...args
}) => {
  let [dots, setDots] = useState('.');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (dots.length >= 3) {
        setDots('.');
      } else {
        setDots(dots + '.');
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dots]);

  let classes = classNames(
    defaultClasses,
    className,
    { [disabledClasses]: disabled },
    { [isLoadingClasses]: isLoading },
  );
  return (
    <button type={variant} disabled={isLoading || disabled} className={classes} {...args}>
      {isLoading && (<Loader color={color} height={16} width={16} />)}
      {children}
      {isLoading && dots}
    </button>
  );
};
