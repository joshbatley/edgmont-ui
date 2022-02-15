import React from 'react';
import classNames from 'classnames';

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
