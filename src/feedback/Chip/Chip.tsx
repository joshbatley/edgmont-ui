import React from 'react';
import clsx from 'clsx';
import { XCircleIcon } from 'feedback/Icons/Solid';
import { applyColor } from 'shared/colorpicker';
import { ClickableElement } from 'inputs';
import { Text } from 'data';

export type ChipProps = {
  color?: Colors;
  size?: Size;
  outline?: boolean;
  handleDelete?: () => void;
};

const applySize = (size: Size) => {
  switch (size) {
    case 'small':
      return 'px-2 py-px text-xs font-bold';
    case 'medium':
      return 'px-3 py-1 text-sm font-bold';
    case 'large':
      return 'px-3 py-2 text-md font-bold';
  }
};

export const Chip: React.FC<ChipProps> = ({
  color = 'gray', size = 'small', outline = true, handleDelete, children,
}) => {
  let colorClasses = applyColor(color, '200', 'bg');
  let borderClasses = applyColor(color, '600', 'border') + ' border';
  let textClasses = applyColor(color, outline ? '800' : '600', 'text');
  let sizeClasses = applySize(size);
  let showIcon = handleDelete !== undefined && handleDelete !== null;

  return (
    <div className={clsx(outline ? colorClasses : borderClasses, textClasses, sizeClasses, 'rounded-lg inline-flex space-x-2 justify-center items-center w-fit')}>
      <Text>{children}</Text>
      {showIcon && (
        <ClickableElement onClick={handleDelete}>
          <XCircleIcon width={16} height={16} />
        </ClickableElement>
      )}
    </div>
  );
};
