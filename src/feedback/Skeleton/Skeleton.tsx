import React from 'react';
import clsx from 'clsx';

export type SkeletonProps = {
  varient?: 'text' | 'rectangle' | 'circle';
  height?: number;
  width?: number;
} & React.ComponentPropsWithoutRef<'div'>;

export const Skeleton: React.FC<SkeletonProps> = ({
  height, width, className, varient = 'text', ...rest
}) => {
  switch (varient) {
    case 'circle':
      return (
        <div
          style={{ height, width }}
          className={clsx('animate-pulse bg-gray-200 rounded-full', className)}
          {...rest}
        />
      );
    case 'rectangle':
      return (
        <div
          style={{ height, width }}
          className={clsx('animate-pulse bg-gray-200 rounded-md', className)}
          {...rest}
        />
      );
    default:
      return (
        <span className={clsx("animate-pulse bg-gray-200 flex rounded-md h-full text-[50%] before:h-1/2 before:content-['\\00a0']", className)} {...rest} />
      );
  }
};
