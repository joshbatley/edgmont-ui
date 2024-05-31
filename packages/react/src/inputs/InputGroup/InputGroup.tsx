import styled from 'styled-components';
import { WithChildren } from '../../types';

const Group = styled.div`
  > div {
    border-radius: 0;
    position: relative;
  }

  > div:focus-within {
    z-index: 20;
  }

  > :not(div:first-of-type) {
    margin-top: -1px;
  }

  div:first-of-type {
    border-radius: ${({ theme }) => `${theme.radii[3]} ${theme.radii[3]}`} 0 0 ;
  }
  div:last-of-type {
    border-radius: ${({ theme }) => `0 0 ${theme.radii[3]} ${theme.radii[3]}`};
  }
`;

export const InputGroup: React.FC<WithChildren> = ({ children }) => (
  <Group>
    {children}
  </Group>
);
