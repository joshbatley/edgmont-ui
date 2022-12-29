import React from 'react';
import styled from 'styled-components';
import { PaginationControls } from './PaginationControls';

export type PaginationProps = {
  limit: number;
  skip: number;
  itemCount: number;
  setSkip: (skip: number) => void;
  size?: Size;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;
  line-height: 1rem;
`;

const Strong = styled.strong`
  font-weight: 500;
`;

export const Pagination: React.FC<PaginationProps> = ({
  limit, skip, setSkip, itemCount, size = 'small',
}) => {
  let to = (skip + limit > itemCount) ? itemCount : skip + limit;
  return (
    <Container>
      <div>
        Showing <Strong>{skip + 1}</Strong> to <Strong>{to}</Strong> of <Strong>{itemCount}</Strong> results
      </div>
      <div>
        <PaginationControls size={size} itemCount={itemCount} limit={limit} skip={skip} setSkip={setSkip} />
      </div>
    </Container>
  );
};
