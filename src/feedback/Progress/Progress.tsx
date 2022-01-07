import classNames from 'classnames';
import React from 'react';

export type LinearProgressProps = {
  color?: ColorsAndShades,
  height?: string | number;
  percentage?: number;
};

export const LinearProgress: React.FC<LinearProgressProps> = ({
  color = 'gray', height = 5, percentage = 0,
}) => {
  let bgColor = `bg-${color}-200`;
  let fgColor = `bg-${color}-500`;
  if (color === 'white') {
    bgColor = 'bg-white opacity-30';
    fgColor = 'bg-white';
  }
  return (
    <div className="overflow-hidden w-full relative rounded" style={{ height }}>
      <div className={classNames(bgColor, 'rounded w-full h-full absolute inset-0')}></div>
      <div className={classNames(fgColor, 'rounded h-full absolute inset-0')} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export type CircleProgressProps = {
  color?: ColorsAndShades,
  height?: string | number;
  width?: string | number;
  percentage?: number;
};

export const CircleProgress: React.FC<CircleProgressProps> = ({ color = 'gray', height = 50, width = 50, percentage = 0 }) => {
  let circleOuterColor = `stroke-${color}-200`;
  let circleInnerColor = `stroke-${color}-500`;
  if (color === 'white') {
    circleOuterColor = 'stroke-white stroke-opacity-30';
    circleInnerColor = 'stroke-white';
  }

  let circumference = 2 * Math.PI * ((50 - 4) / 2);
  let strokeDasharray = circumference.toFixed(3);
  let strokeDashoffset = `${(((100 - percentage) / 100) * circumference).toFixed(3)}px`;

  return (
    <svg viewBox="25 25 50 50" height={height} width={width} className="stroke-current -rotate-90">
      <circle cx="50" cy="50" r="23" fill="none" strokeWidth="4" className={circleOuterColor} />
      <circle cx="50" cy="50" r="23" fill="none" strokeWidth="4"
        strokeLinecap="round"
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={strokeDasharray}
        className={circleInnerColor}
      />
    </svg>
  );
};
