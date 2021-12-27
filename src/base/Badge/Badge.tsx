import React from 'react';
import classNames from 'classnames';
import { applyColor } from 'utils/colorpicker';

type BadgeProps = {
  color?: Colors;
  position?: IntercardinalPoints;
  tag: React.ReactNode;
};

function getPosition(position: IntercardinalPoints) {
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
}

export const Badge: React.FC<BadgeProps> = ({ color = 'gray', position = 'NE', children, tag }) => {
  let colorClass = applyColor(color, '600', 'bg');
  let positionClass = getPosition(position);
  return (
    <div className="relative inline-block">
      <div className={classNames('absolute rounded-full text-xs text-center px-1 py-0.5 min-w-fit w-5 text-white empty:w-1 empty:h-2', colorClass, positionClass)}>
        {tag}
      </div>
      {children}
    </div>
  );
};
