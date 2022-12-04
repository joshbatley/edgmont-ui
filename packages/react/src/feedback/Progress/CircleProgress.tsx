import React from 'react';

export type CircleProgressProps = {
  color?: ColorsAndWhiteLegacy;
  height?: string | number;
  width?: string | number;
  percentage?: number;
};

const outerClasses: Record<ColorsAndWhiteLegacy, string> = {
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

const innerClasses: Record<ColorsAndWhiteLegacy, string> = {
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

export const CircleProgress: React.FC<CircleProgressProps> = ({ color = 'primary', height = 50, width = 50, percentage = 0 }) => {
  let circumference = 2 * Math.PI * ((50 - 4) / 2);
  let strokeDasharray = circumference.toFixed(3);
  let strokeDashoffset = `${(((100 - percentage) / 100) * circumference).toFixed(3)}px`;

  return (
    <svg viewBox="25 25 50 50" height={height} width={width} className="stroke-current -rotate-90">
      <circle cx="50" cy="50" r="23" fill="none" strokeWidth="4" className={outerClasses[color]} />
      <circle cx="50" cy="50" r="23" fill="none" strokeWidth="4"
        strokeLinecap="round"
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={strokeDasharray}
        className={innerClasses[color]}
      />
    </svg>
  );
};
