import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button/BaseButton';
import {WithChildren} from "../../types";

const Grouping = styled.div`
  ${StyledButton}:not([data-ignore-radius]) {
    border-radius:0;
  }
  ${StyledButton} {
    position: relative;
    margin-right: -1px;
  }
  ${StyledButton}:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii[3]};
    border-bottom-left-radius: ${({ theme }) => theme.radii[3]};
  }

  ${StyledButton}:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii[3]};
    border-bottom-right-radius: ${({ theme }) => theme.radii[3]};
  }
`;

export const ButtonGroup: React.FC<WithChildren> = ({ children }) => (
  <Grouping>
    {children}
  </Grouping>
);
