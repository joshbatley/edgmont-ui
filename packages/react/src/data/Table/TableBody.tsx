import styled from 'styled-components';

export const TableBody = styled.tbody`
  background: ${({ theme }) => theme.colors.background[0]};
  border-top-width: 1px;
  > :not([hidden]) ~ :not([hidden]) {
    border-top-width: 1px;
    border-color: ${({ theme }) => theme.colors.background[2]}
  }
`;
