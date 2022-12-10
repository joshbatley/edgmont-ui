import React, { forwardRef } from 'react';
import styled from 'styled-components';

export type TableHeadProps = {
  headers?: string[];
  sticky?: boolean;
} & React.ComponentPropsWithRef<'thead'>;

const Thead = styled.thead<TableHeadProps>`
  text-align: left;
  background: ${({ theme }) => theme.colors.offwhite};
  ${({ sticky, theme }) => sticky && `
    position: sticky;
    top: 0;
    box-shadow: ${theme.shadows.base[1]};
  `}
`;

const TableHeadItem = styled.th`
  padding: ${({ theme }) => theme.space[3]};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  color: ${({ theme }) => theme.colors.baseLight};
`;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, headers, sticky, ...rest }, ref) => {
  if (!headers) {
    return (
      <Thead sticky={sticky} ref={ref} {...rest}>{children}</Thead>
    );
  }
  return (
    <Thead sticky={sticky} ref={ref}>
      <tr>
        {headers.map(h => (
          <TableHeadItem key={h}>{h}</TableHeadItem>
        ))}
      </tr>
    </Thead>
  );
});
