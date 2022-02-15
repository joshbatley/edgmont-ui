import React from 'react';
import clsx from 'clsx';
import { LinearSlide } from 'utils';

export type LinearLoaderProps = {
  color?: ColorsAndShades,
  height?: string | number;
};

export const LinearLoader: React.FC<LinearLoaderProps> = ({ color, height = 5 }) => {
  let bgColor = `bg-${color}-200`;
  let fgColor = `bg-${color}-500`;
  if (color === 'white') {
    bgColor = 'bg-white opacity-30';
    fgColor = 'bg-white';
  }
  return (
    <div className="overflow-hidden w-full relative rounded" style={{ height }}>
      <div className={clsx(bgColor, 'rounded w-full h-full absolute inset-0')}></div>
      <LinearSlide clsx="w-1/3 h-full absolute inset-0">
        <div className={clsx(fgColor, 'rounded h-full')}></div>
      </LinearSlide>
    </div>
  );
};
