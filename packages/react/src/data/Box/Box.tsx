import styled from 'styled-components';
import {
  border, boxShadow, color, grid, layout, order, space,
  ColorProps, SpaceProps, LayoutProps, BoxShadowProps, BorderProps, OrderProps, GridProps, FlexboxProps, flexbox,
} from 'styled-system';

export type BoxProps = ColorProps & SpaceProps & LayoutProps & BoxShadowProps & BorderProps & OrderProps & GridProps & FlexboxProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${boxShadow}
  ${border}
  ${order}
  ${grid}
  ${flexbox}
`;
