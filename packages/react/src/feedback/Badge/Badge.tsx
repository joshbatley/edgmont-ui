import React from 'react';
import clsx from 'clsx';

export type BadgeProps = {
  color?: ColorsLegacy;
  position?: IntercardinalPoints;
  tag: React.ReactNode;
  wrapperClasses?: string;
} & WithChildren;

const getPosition = (position: IntercardinalPoints) => {
  let classes = '';
  if (position.includes('W')) {
    classes += 'left-0 translate-x-[-50%] ';
  }
  if (position.includes('E')) {
    classes += 'right-0 translate-x-[50%] ';
  }
  if (position.includes('N')) {
    classes += 'top-0 translate-y-[-50%] ';
  }
  if (position.includes('S')) {
    classes += 'bottom-0 translate-y-[50%] ';
  }
  return classes;
};

const classes: Record<ColorsAndWhiteLegacy, string> = {
  primary: 'bg-primary-600',
  gray: 'bg-gray-600',
  green: 'bg-green-600',
  lime: 'bg-lime-600',
  red: 'bg-red-600',
  yellow: 'bg-yellow-600',
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600',
  pink: 'bg-pink-600',
  white: 'bg-white text-gray-900 shadow-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  color = 'primary', position = 'NE', children, tag, wrapperClasses,
}) => (
  <div className={clsx('relative inline-block', wrapperClasses)}>
    <div className={clsx('absolute rounded-full text-xs text-center px-1 py-0.5 min-w-fit w-5 text-white empty:w-1 empty:h-2', classes[color], getPosition(position))}>
      {tag}
    </div>
    {children}
  </div>
);
