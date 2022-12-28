import React, { forwardRef } from 'react';
import styled from 'styled-components';

export type TableProps = {
  containerClasses?: string;
  footer?: React.ReactNode;
} & React.ComponentPropsWithRef<'table'>;

const Container = styled.div<TableProps>`
  background: ${({ theme }) => theme.colors.background[1]};
  box-shadow: ${({ theme }) => theme.shadows.highlight};
  border-radius: ${({ theme }) => theme.radii[3]};
  contain: paint;
  padding-bottom: ${({ footer, theme }) => !footer ? theme.space[1] : '0'};
`;

const StyledTable = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse;
  > :not([hidden]) ~ :not([hidden]) & :not(:last-child) {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.background[2]}
  }
`;

const Footer = styled.div`
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  border-top-width: 1px;
`;

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, containerClasses, footer, ...rest }, ref) => (
  <Container footer={footer}>
    <StyledTable ref={ref} {...rest}>
      {children}
    </StyledTable>
    {footer && (
      <Footer>
        {footer}
      </Footer>
    )}
  </Container>
));
