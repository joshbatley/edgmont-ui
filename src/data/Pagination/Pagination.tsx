import React from 'react';
import { PaginationControls } from './PaginationControls';

export type PaginationProps = {
  limit: number;
  skip: number;
  itemCount: number;
  setSkip: (skip: number) => void;
  size?: Size;
};

export const Pagination: React.FC<PaginationProps> = ({
  limit, skip, setSkip, itemCount, size = 'small',
}) => {
  let to = skip + limit > itemCount ? itemCount : skip + limit;
  return (
    <div className="w-full flex justify-between items-center min-h-[38px]">
      <div className="leading-4">
        Showing <strong className="font-medium">{skip + 1}</strong> to <strong className="font-medium">{to}</strong> of <strong className="font-medium">{itemCount}</strong> results
      </div>
      <div>
        <PaginationControls size={size} itemCount={itemCount} limit={limit} skip={skip} setSkip={setSkip} />
      </div>
    </div>
  );
};
