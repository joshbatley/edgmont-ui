import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  div {
    border-radius: 0;
    border-bottom: none;
    position: relative;
    :focus {
      z-index: 20;
    }
  }
  > div:first-of-type {
    border-radius: ${({ theme }) => `${theme.radii[3]} ${theme.radii[3]}`} 0 0 ;
  }
  > div:last-of-type {
    border-radius: ${({ theme }) => `0 0 ${theme.radii[3]} ${theme.radii[3]}`};
    border-bottom: ${({ theme }) => theme.borders.gray[1]};
  }
`;

export const TextFieldGroup: React.FC<WithChildren> = ({ children }) => (
  <Group>
    {children}
  </Group>
);
