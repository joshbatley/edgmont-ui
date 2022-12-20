import React from 'react';
import { List } from 'data/List';
import styled from 'styled-components';
import { useSelectContext } from '.';

const StyledList = styled(List)`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  box-shadow: ${({ theme }) => theme.shadows.base[4]};
  border: ${({ theme }) => theme.borders.background2[1]};
  background: ${({ theme }) => theme.colors.background[0]};
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
