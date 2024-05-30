import { useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Button, ClickableElement } from '../../inputs/Button';
import { ButtonGroup } from '../../inputs/ButtonGroup';
import { calculatePageNumbers } from './utils';
import styled from 'styled-components';

export type PaginationProps = {
  skip: number;
  limit: number;
  itemCount: number;
  setSkip: (skip: number) => void;
};

const StyledBtn = styled(ClickableElement)`
  :hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const ELLIPSIS_ELEMENT = <EllipsisHorizontalIcon width={16} height={20} />;

export const PaginationControls: React.FC<PaginationProps> = ({
  skip, limit, itemCount, setSkip,
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
        verticalAlign="bottom"
        onClick={() => setSkip(skip - limit)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon width={16} height={20} />
      </Button>
      {pages.map((page) => (
        <StyledBtn
          key={page.toString()}
          borderRadius={2}
          verticalAlign="bottom"
          zIndex={page === currentPage ? 30 : 'unset'}
          width="36px"
          height="36px"
          border={page === currentPage ? 'border.1' : 'none'}
          onClick={() => handlePageClick(page)}
          disabled={page === ELLIPSIS_ELEMENT}
          data-ignore-radius
        >
          {page}
        </StyledBtn>
      ))}
      <Button
        verticalAlign="bottom"
        onClick={() => setSkip(skip + limit)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon width={16} height={20} />
      </Button>
    </ButtonGroup>
  );
};
