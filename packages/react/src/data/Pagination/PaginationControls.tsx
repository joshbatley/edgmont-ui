import React, { useMemo } from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { ButtonGroup, Button } from 'inputs';
import { calculatePageNumbers } from './utils';

export type PaginationProps = {
  skip: number;
  limit: number;
  itemCount: number;
  setSkip: (skip: number) => void;
  size?: Size;
};

const ELLIPSIS_ELEMENT = <EllipsisHorizontalIcon width={16} height={20} />;

export const PaginationControls: React.FC<PaginationProps> = ({
  skip, limit, itemCount, setSkip, size,
}) => {
  let currentPage = skip === 0 ? 1 : Math.floor(skip / limit + 1);
  let totalPages = Math.ceil(itemCount / limit);

  let pages = useMemo(() => {
    return calculatePageNumbers(totalPages, currentPage, ELLIPSIS_ELEMENT);
  }, [totalPages, currentPage]);

  let handlePageClick = (page: number | JSX.Element) => {
    let newSkip = 0;
    if (typeof page === 'number' && page !== 1) {
      newSkip = limit * (page - 1);
    }
    setSkip(newSkip);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <ButtonGroup>
      <Button
        size={size}
        className="align-bottom"
        onClick={() => setSkip(skip - limit)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon width={16} height={20} />
      </Button>
      {pages.map((page) => (
        <Button
          size={size}
          key={page.toString()}
          className={clsx({ 'bg-primary-100 z-30': page === currentPage }, 'align-bottom rounded')}
          onClick={() => handlePageClick(page)}
          disabled={page === ELLIPSIS_ELEMENT}
        >
          {page}
        </Button>
      ))}
      <Button
        size={size}
        className="align-bottom"
        onClick={() => setSkip(skip + limit)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon width={16} height={20} />
      </Button>
    </ButtonGroup>
  );
};
