import React from 'react';

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