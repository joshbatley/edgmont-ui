import React from 'react';
import clsx from 'clsx';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export type StepIconProps = {
  error?: boolean;
  state?: 'completed' | 'active' | 'default';
  icon?: React.ReactNode;
  number: number;
  color?: ColorsLegacy;
};

const classes: Record<ColorsLegacy, string> = {
  primary: 'text-primary-500',
  gray: 'text-gray-500',
  green: 'text-green-500',
  lime: 'text-lime-500',
  red: 'text-red-500',
  yellow: 'text-yellow-500',
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
  pink: 'text-pink-500',
};

export const StepIcon: React.FC<StepIconProps> = ({
  state = 'default', icon, number, color = 'primary', error,
}) => {
  if (icon) {
    return <>{icon}</>;
  }

  if (error) {
    return (
      <ExclamationTriangleIcon width={24} height={24} className="text-red-500" viewBox="2 2 16 16" />
    );
  }

  if (state === 'active' || state === 'default') {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill='currentColor'
        className={clsx(state === 'default' ? 'text-gray-400' : classes[color])}
      >
        <circle cx="12" cy="12" r="12" className="current" />
        <text x="12" y="16" textAnchor="middle" className="text-white font-bold text-xs">{number}</text>
      </svg >
    );
  }

  return (
    <CheckCircleIcon width={24} height={24} className={classes[color]} viewBox="2 2 16 16" />
  );
};
