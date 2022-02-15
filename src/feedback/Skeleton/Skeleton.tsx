import React from 'react';
import classNames from 'classnames';

export type SkeletonProps = {
  varient?: 'text' | 'rectangle' | 'circle';
  height?: number;
  width?: number;
} & React.ComponentPropsWithoutRef<'div'>;

export const Skeleton: React.FC<SkeletonProps> = ({
  height, width, className, varient = 'text', ...rest
}) => {
  let textDefaults = "animate-pulse bg-gray-200 flex rounded-md h-full text-[50%] before:h-1/2 before:content-['\\00a0']";
  let rectanagleDefaults = 'animate-pulse bg-gray-200 rounded-md';
  let circleDefaults = 'animate-pulse bg-gray-200 rounded-full';

  switch (varient) {
    case 'circle':
      return (
        <div
          style={{ height, width }}
          className={classNames(circleDefaults, classNames)}
          {...rest}
        />
      );
    case 'rectangle':
      return (
        <div
          style={{ height, width }}
          className={classNames(rectanagleDefaults, classNames)}
          {...rest}
        />
      );
    default:
      return (
        <span className={classNames(textDefaults, className)} {...rest} />
      );
  }
};
