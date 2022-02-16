import React from 'react';
import clsx from 'clsx';
import { XCircleIcon } from 'feedback/Icons/Solid';
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

const classes: Record<Colors, string> = {
  primary: 'bg-primary-200 text-primary-800',
  gray: 'bg-gray-200 text-gray-800',
  green: 'bg-green-200 text-green-800',
  lime: 'bg-lime-200 text-lime-800',
  red: 'bg-red-200 text-red-800',
  yellow: 'bg-yellow-200 text-yellow-800',
  blue: 'bg-blue-200 text-blue-800',
  purple: 'bg-purple-200 text-purple-800',
  orange: 'bg-orange-200 text-orange-800',
  pink: 'bg-pink-200 text-pink-800',
};

export const Chip: React.FC<ChipProps> = ({
  color = 'primary', size = 'small', handleDelete, children,
}) => (
  <div className={clsx(classes[color], applySize(size), 'rounded-lg inline-flex space-x-2 justify-center items-center w-fit')}>
    <Text>{children}</Text>
    {(handleDelete !== undefined && handleDelete !== null) && (
      <ClickableElement onClick={handleDelete}>
        <XCircleIcon width={16} height={16} />
      </ClickableElement>
    )}
  </div>
);

