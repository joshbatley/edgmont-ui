import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  div {
    border-radius: 0;
    border-bottom: 0;
    position: relative;
    :focus {
      z-index: 20;
    }
  }
  > div:first-of-type
  > div:first-of-type input {
    border-radius: ${({ theme }) => `${theme.radii[3]} ${theme.radii[3]}`} 0 0 ;
  }
  > div:last-of-type
  > div:last-of-type input {
    border-radius: ${({ theme }) => `0 0 ${theme.radii[3]} ${theme.radii[3]}`};
  }
`;

export const TextFieldGroup: React.FC<WithChildren> = ({ children }) => (
  <Group data-testId='asds'>
    {children}
  </Group>
);
