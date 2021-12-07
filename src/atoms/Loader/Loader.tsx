import React from 'react';

type LoaderProps = {
  color?: Colors,
  height?: string | number;
  width?: string | number;
};

export const Loader: React.FC<LoaderProps> = ({ color, height = 50, width = 50, ...args }) => {
  let circleOuterColor = `text-${color}-200`;
  let circleInnerColor = `text-${color}-500`;
  if (color === 'white') {
    circleOuterColor = 'text-white text-opacity-30';
    circleInnerColor = 'text-white';
  }
  return (
    <svg viewBox="25 25 50 50" height={height} width={width} className="animate-spin stroke-current" {...args} >
      <circle cx="50" cy="50" r="20" fill="none" stroke-width="4" className={circleOuterColor} />

      <circle cx="50" cy="50" r="20" fill="none" stroke-width="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" className={circleInnerColor} />
    </svg>
  );
};
