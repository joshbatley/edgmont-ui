import { ReactNode } from 'react';

const arrayRange = (from: number, to: number) =>
  Array.from(Array(Math.max(0, to - from + 1)), (_, idx) => idx + from);

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export const calculatePageNumbers = (totalPages: number, currentPage: number, ellipsis: ReactNode): any[] => {
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
    hasLeftEllipsis ? ellipsis : 2,
    ...arrayRange(startPage, endPage),
    hasRightEllipsis ? ellipsis : totalPages - 1,
    totalPages,
  ];
};
