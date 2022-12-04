import React from 'react';
import styled from 'styled-components';
import { Button } from 'inputs/Button/BaseButton';

const Grouping = styled.div`
  ${Button} {
    border-radius: 0;
    position: relative;
    margin-right: -1px;
  }
  ${Button}:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii[3]};
    border-bottom-left-radius: ${({ theme }) => theme.radii[3]};
  }

  ${Button}:last-child {
    border-top-right-radius: ${({ theme }) => theme.radii[3]};
    border-bottom-right-radius: ${({ theme }) => theme.radii[3]};
  }
`;

export const ButtonGroup: React.FC<WithChildren> = ({ children }) => (
  <Grouping>
    {children}
  </Grouping>
);
