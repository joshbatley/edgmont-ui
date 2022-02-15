import React from 'react';
import classNames from 'classnames';

export type ItemProps = {
  item: any;
  isLastItem?: boolean;
  dividerIcon: React.ReactElement;
};

export const Item: React.FC<ItemProps> = ({
  item, isLastItem = false, dividerIcon,
}) => (
  <div className={classNames('inline-flex items-center', !isLastItem && 'text-gray-500')}>
    {item}
    {!isLastItem && React.cloneElement(dividerIcon, {
      width: 16, height: 16, className: 'inline-block mx-1.5',
    })}
  </div>
);
