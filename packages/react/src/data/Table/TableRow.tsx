import React from 'react';
import styled from 'styled-components';

export type TableRowProps = {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
} & React.ComponentPropsWithRef<'tr'>;

export const TableRow = styled.tr<TableRowProps>`
  ${({ onClick, theme }) => typeof onClick === 'function' && `
    cursor: pointer;
    :hover {
      background: ${theme.colors.background[0]};
      box-shadow: ${theme.colors.background[3]} 3px 0px 0px 0px inset;
    }
  `}
  ${({ active, theme }) => active && `
    cursor: pointer;
    background: ${theme.colors.primaryHighlight};
    box-shadow: ${theme.colors.primary} 3px 0px 0px 0px inset;
  `}
`;
