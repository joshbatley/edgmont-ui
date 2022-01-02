import React from 'react';
import classNames from 'classnames';

export type SkeletonProps = {
  varient?: 'text' | 'rectangle' | 'circle';
  height?: number;
  width?: number;
} & React.ComponentPropsWithoutRef<'div'>;

let textDefaults = "animate-pulse bg-gray-200 flex rounded-md h-full text-[50%] before:h-1/2 before:content-['\\00a0']";

let rectanagleDefaults = 'animate-pulse bg-gray-200 rounded-md';

let circleDefaults = 'animate-pulse bg-gray-200 rounded-full';

export const Skeleton: React.FC<SkeletonProps> = ({
  height, width, className, varient = 'text', ...rest
}) => {

  if (varient === 'circle') {
    return (
      <div
        style={{ height, width }}
        className={classNames(circleDefaults, classNames)}
        {...rest}
      />
    );
  }

  if (varient === 'rectangle') {
    return (
      <div
        style={{ height, width }}
        className={classNames(rectanagleDefaults, classNames)}
        {...rest}
      />
    );
  }

  return (
    <span className={classNames(textDefaults, className)} {...rest} />
  );

};
