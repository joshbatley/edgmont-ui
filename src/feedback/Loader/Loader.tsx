import classNames from 'classnames';
import React from 'react';
import { LinearSlide } from 'utils/Transitions/LinearSlide';

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
      <div className={classNames(bgColor, 'rounded w-full h-full absolute inset-0')}></div>
      <LinearSlide classNames="w-1/3 h-full absolute inset-0">
        <div className={classNames(fgColor, 'rounded h-full')}></div>
      </LinearSlide>
    </div>
  );
};

export type CircleLoaderProps = {
  color?: ColorsAndShades,
  height?: string | number;
  width?: string | number;
};

export const CircleLoader: React.FC<CircleLoaderProps> = ({ color, height = 50, width = 50, ...rest }) => {
  let circleOuterColor = `stroke-${color}-200`;
  let circleInnerColor = `stroke-${color}-500`;
  if (color === 'white') {
    circleOuterColor = 'stroke-white stroke-opacity-30';
    circleInnerColor = 'stroke-white';
  }
  return (
    <svg viewBox="25 25 50 50" height={height} width={width} className="animate-spin stroke-current" {...rest} >
      <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" className={circleOuterColor} />
      <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" className={circleInnerColor} />
    </svg>
  );
};
