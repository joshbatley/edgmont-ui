import React from 'react';
import { List } from 'data/List';
import styled from 'styled-components';
import { useSelectContext } from '.';

const StyledList = styled(List)`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  box-shadow: ${({ theme }) => theme.shadows[4]};
  border: ${({ theme }) => theme.borders.lightGray[1]};
  background: #fff;
  margin-top: ${({ theme }) => theme.space[2]};
  position: absolute;
  min-width: 100%;
`;

export const SelectList: React.FC<WithChildren> = ({ children }) => {
  let { isOpen } = useSelectContext();

  if (!isOpen) {
    return null;
  }

  return (
    <StyledList>
      {children}
    </StyledList>
  );
};
