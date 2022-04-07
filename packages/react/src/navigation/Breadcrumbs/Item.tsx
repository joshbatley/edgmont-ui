import React from 'react';
import clsx from 'clsx';

export type ItemProps = {
  item: any;
  isLastItem?: boolean;
  dividerIcon: React.ReactElement;
};

export const Item: React.FC<ItemProps> = ({
  item, isLastItem = false, dividerIcon,
}) => (
  <div className={clsx('inline-flex items-center', { 'text-gray-500': !isLastItem })}>
    {item}
    {!isLastItem && React.cloneElement(dividerIcon, {
      width: 16, height: 16, className: 'inline-block mx-1.5',
    })}
  </div>
);
