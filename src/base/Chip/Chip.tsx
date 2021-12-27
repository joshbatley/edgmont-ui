import classNames from 'classnames';
import React from 'react';
import { XCircleIcon } from 'base/Icons/Solid';
import { Text } from 'base/Text';
import { applyColor } from 'utils/colorpicker';
import { ClickableElement } from 'inputs/Button';

type Props = {
  color?: Colors;
  size?: Size;
  outline?: boolean;
  handleDelete?: () => void;
};

function applySize(size: Size) {
  switch (size) {
    case 'small':
      return 'px-2 py-px text-xs font-bold';
    case 'medium':
      return 'px-3 py-1 text-sm font-bold';
    case 'large':
      return 'px-3 py-2 text-md font-bold';
  }
}

export const Chip: React.FC<Props> = ({
  color = 'gray', size = 'small', outline = true,
  handleDelete, children,
}) => {
  let colorClasses = applyColor(color, '200', 'bg');
  let borderClasses = applyColor(color, '600', 'border') + ' border';
  let textClasses = applyColor(color, outline ? '800' : '600', 'text');
  let sizeClasses = applySize(size);
  let classes = 'rounded-lg inline-flex space-x-2 justify-center items-center';
  let showIcon = handleDelete !== undefined && handleDelete !== null;

  return (
    <div className={classNames(outline ? colorClasses : borderClasses, textClasses, sizeClasses, classes)}>
      <Text>{children}</Text>
      {showIcon && (
        <ClickableElement onClick={handleDelete}>
          <XCircleIcon width={16} height={16} />
        </ClickableElement>
      )}
    </div>
  );
};
