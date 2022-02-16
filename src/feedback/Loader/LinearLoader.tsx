import React from 'react';
import clsx from 'clsx';
import { LinearSlide } from 'utils';

export type LinearLoaderProps = {
  color?: ColorsAndWhite,
  height?: string | number;
};

const outerClasses: Record<ColorsAndWhite, string> = {
  primary: 'bg-primary-200',
  gray: 'bg-gray-200',
  green: 'bg-green-200',
  lime: 'bg-lime-200',
  red: 'bg-red-200',
  yellow: 'bg-yellow-200',
  blue: 'bg-blue-200',
  purple: 'bg-purple-200',
  orange: 'bg-orange-200',
  pink: 'bg-pink-200',
  white: 'bg-white',
};

const innerClasses: Record<ColorsAndWhite, string> = {
  primary: 'bg-primary-500',
  gray: 'bg-gray-500',
  green: 'bg-green-500',
  lime: 'bg-lime-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  pink: 'bg-pink-500',
  white: 'bg-gray-400',
};

export const LinearLoader: React.FC<LinearLoaderProps> = ({ color = 'primary', height = 5 }) => (
  <div className="overflow-hidden w-full relative rounded" style={{ height }}>
    <div className={clsx(outerClasses[color], 'rounded w-full h-full absolute inset-0')}></div>
    <LinearSlide className="w-1/3 h-full absolute inset-0">
      <div className={clsx(innerClasses[color], 'rounded')} style={{ height }}></div>
    </LinearSlide>
  </div>
);
