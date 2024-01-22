import React, { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Button } from '../../inputs';
import { Box } from '../../data';
import { Item } from './Item';
import {WithChildren} from "../../types";

export type BreadcrumbsProps = {
  maxItems?: number;
  dividerIcon?: React.ReactElement;
  itemsBefore?: number;
  itemsAfter?: number;
} & WithChildren;

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
    <Box display="flex" alignItems="center">
      {beforeItems.map((c, idx) => (
        <Item key={idx} item={c} dividerIcon={dividerIcon} />
      ))}
      {showAll ? middleItems.map((c, idx) => (
        <Item key={idx} item={c} dividerIcon={dividerIcon} />
      )) : (
        <Box display="inline-flex" alignItems="center">
          <Button size='small' onClick={() => setShow(true)}>
            <EllipsisHorizontalIcon height={13} width={14} />
          </Button>
          <Box display="inline-block" color="baseHighlight" mx="2">{dividerIcon}</Box>
        </Box>
      )}
      {afterItems.map((c, idx) => (
        <Item key={idx} item={c} isLastItem={idx === afterItems.length - 1} dividerIcon={dividerIcon} />
      ))}
    </Box >
  );
};
