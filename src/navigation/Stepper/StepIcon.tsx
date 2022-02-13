import React from 'react';
import classNames from 'classnames';
import { applyColor } from 'shared/colorpicker';
import { CheckCircleIcon, ExclamationIcon } from 'feedback/Icons/Solid';

export type StepIconProps = {
  error?: boolean;
  state?: 'completed' | 'active' | 'default';
  icon?: React.ReactNode;
  number: number;
  color?: Colors;
};

export const StepIcon: React.FC<StepIconProps> = ({
  state = 'default', icon, number, color = 'blue', error,
}) => {
  let svgColor = applyColor(color, '500', 'text');
  let svgErrorColor = applyColor('red', '500', 'text');

  if (icon) {
    return <>{icon}</>;
  }

  if (error) {
    return (
      <ExclamationIcon width={24} height={24} className={svgErrorColor} viewBox="2 2 16 16" />
    );
  }

  if (state === 'active' || state === 'default') {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill='currentColor'
        className={classNames(state === 'default' ? 'text-gray-400' : svgColor)}
      >
        <circle cx="12" cy="12" r="12" className="current" />
        <text x="12" y="16" textAnchor="middle" className="text-white font-bold text-xs">{number}</text>
      </svg >
    );
  }

  return (
    <CheckCircleIcon width={24} height={24} className={svgColor} viewBox="2 2 16 16" />
  );
};
