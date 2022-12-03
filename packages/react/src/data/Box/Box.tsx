import React from 'react';
import styled from 'styled-components';
import { border, boxShadow, color, grid, layout, order, space } from 'styled-system';

export type BoxProps = {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${boxShadow}
  ${border}
  ${order}
  ${grid}
`;
