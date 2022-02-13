import React, { useMemo } from 'react';
import { ButtonGroup, HighlightButton } from 'inputs';
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from 'feedback/Icons/Outline';
import classNames from 'classnames';

export type PaginationProps = {
  skip: number;
  limit: number;
  itemCount: number;
  setSkip: (skip: number) => void;
  size?: Size;
};

const arrayRange = (from: number, to: number) =>
  Array.from(Array(Math.max(0, to - from + 1)), (_, idx) => idx + from);

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));
const ELLIPSIS_ELEMENT = <DotsHorizontalIcon width={16} height={20} />;

const calculatePageNumbers = (totalPages: number, currentPage: number) => {
  let pageNeighbours = 1;
  let totalNumbers = 7;
  let totalControls = totalNumbers + pageNeighbours;

  if (totalPages < totalControls) {
    return arrayRange(1, totalPages);
  }
  let minPageNumber = 3;
  let maxPageNumber = totalPages - 2;

  let startPage = clamp(currentPage - pageNeighbours, minPageNumber, totalPages - 4);
  let endPage = clamp(currentPage + pageNeighbours, 5, maxPageNumber);

  let hasLeftEllipsis = startPage > minPageNumber;
  let hasRightEllipsis = endPage < maxPageNumber;

  return [
    1,
    hasLeftEllipsis ? ELLIPSIS_ELEMENT : 2,
    ...arrayRange(startPage, endPage),
    hasRightEllipsis ? ELLIPSIS_ELEMENT : totalPages - 1,
    totalPages,
  ];
};

export const PaginationControls: React.FC<PaginationProps> = ({
  skip, limit, itemCount, setSkip, size,
}) => {
  let currentPage = skip === 0 ? 1 : Math.floor(skip / limit + 1);
  let totalPages = Math.ceil(itemCount / limit);

  let pages = useMemo(() => {
    return calculatePageNumbers(totalPages, currentPage);
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
      <HighlightButton size={size} className="align-bottom" onClick={() => setSkip(skip - limit)} disabled={currentPage === 1}>
        <ChevronLeftIcon width={16} height={20} />
      </HighlightButton>
      {pages.map((page) => (
        <HighlightButton
          size={size}
          key={page.toString()}
          className={classNames(page === currentPage && 'bg-indigo-100 z-30', 'align-bottom rounded')}
          onClick={() => handlePageClick(page)}
          disabled={page === ELLIPSIS_ELEMENT}
        >
          {page}
        </HighlightButton>
      ))}
      <HighlightButton size={size} className="align-bottom" onClick={() => setSkip(skip + limit)} disabled={currentPage === totalPages}>
        <ChevronRightIcon width={16} height={20} />
      </HighlightButton>
    </ButtonGroup>
  );
};
