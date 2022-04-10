import React from 'react';

export type CircleLoaderProps = {
  color?: ColorsAndWhite;
  height?: string | number;
  width?: string | number;
};

const outerClasses: Record<ColorsAndWhite, string> = {
  primary: 'stroke-primary-200',
  gray: 'stroke-gray-200',
  green: 'stroke-green-200',
  lime: 'stroke-lime-200',
  red: 'stroke-red-200',
  yellow: 'stroke-yellow-200',
  blue: 'stroke-blue-200',
  purple: 'stroke-purple-200',
  orange: 'stroke-orange-200',
  pink: 'stroke-pink-200',
  white: 'stroke-white',
};

const innerClasses: Record<ColorsAndWhite, string> = {
  primary: 'stroke-primary-500',
  gray: 'stroke-gray-500',
  green: 'stroke-green-500',
  lime: 'stroke-lime-500',
  red: 'stroke-red-500',
  yellow: 'stroke-yellow-500',
  blue: 'stroke-blue-500',
  purple: 'stroke-purple-500',
  orange: 'stroke-orange-500',
  pink: 'stroke-pink-500',
  white: 'stroke-gray-400',
};

export const CircleLoader: React.FC<CircleLoaderProps> = ({ color = 'primary', height = 50, width = 50, ...rest }) => (
  <svg viewBox="25 25 50 50" height={height} width={width} className="animate-spin stroke-current" {...rest} >
    <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" className={outerClasses[color]} />
    <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" className={innerClasses[color]} />
  </svg>
);

