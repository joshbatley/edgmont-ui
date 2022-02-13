import React, { useState } from 'react';
import classNames from 'classnames';
import { DotsHorizontalIcon } from 'feedback/Icons/Outline';
import { SecondaryButton } from 'inputs';

export type BreadcrumbsProps = {
  maxItems?: number;
  dividerIcon?: React.ReactElement;
  itemsBefore?: number;
  itemsAfter?: number;
};

const Item: React.FC<{ item: any, isLastItem?: boolean, dividerIcon: React.ReactElement }> = ({
  item, isLastItem = false, dividerIcon,
}) => (
  <div className={classNames('inline-flex items-center', !isLastItem && 'text-gray-500')}>
    {item}
    {!isLastItem && React.cloneElement(dividerIcon, {
      width: 16, height: 16, className: 'inline-block mx-1.5',
    })}
  </div>
);

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children, maxItems = 8, itemsBefore = 1, itemsAfter = 1, dividerIcon = <div>/</div>,
}) => {
  let [showAll, setShow] = useState(false);
  let items = React.Children.toArray(children);

  if (items.length <= maxItems) {
    return (
      <div>
        {items.map((c, idx) => (
          <Item key={idx} item={c} isLastItem={idx === items.length - 1} dividerIcon={dividerIcon} />
        ))}
      </div>
    );
  }

  let beforeItems = items.slice(0, itemsBefore);
  let middleItems = items.slice(itemsBefore, -itemsAfter);
  let afterItems = items.slice(-itemsAfter);

  return (
    <div className="flex items-center">
      {beforeItems.map((c, idx) => (
        <Item key={idx} item={c} dividerIcon={dividerIcon} />
      ))}
      {showAll ? middleItems.map((c, idx) => (
        <Item key={idx} item={c} dividerIcon={dividerIcon} />
      )) : (
        <div className='inline-flex items-center'>
          <SecondaryButton size='small' onClick={() => setShow(true)}>
            <DotsHorizontalIcon height={16} width={16} />
          </SecondaryButton>
          {React.cloneElement(dividerIcon, {
            width: 16, height: 16, className: 'inline-block text-gray-500 mx-1.5',
          })}
        </div>
      )}
      {afterItems.map((c, idx) => (
        <Item key={idx} item={c} isLastItem={idx === afterItems.length - 1} dividerIcon={dividerIcon} />
      ))}
    </div >
  );
};
