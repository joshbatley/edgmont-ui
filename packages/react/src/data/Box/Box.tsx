import styled from 'styled-components';
import {
  border, boxShadow, color, grid, layout, order, space,
  ColorProps, SpaceProps, LayoutProps, BoxShadowProps, BorderProps, OrderProps, GridProps, FlexboxProps, flexbox, position, PositionProps, typography, TypographyProps,
} from 'styled-system';

export type BoxProps = ColorProps & SpaceProps & LayoutProps & BoxShadowProps & BorderProps & OrderProps & GridProps & FlexboxProps & PositionProps & TypographyProps & {
  spaceXBetween?: string | number;
  spaceYBetween?: string | number;
};

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${boxShadow}
  ${border}
  ${order}
  ${grid}
  ${flexbox}
  ${position}
  ${typography}
  ${({ spaceXBetween, theme }) => spaceXBetween && theme.spaceXBetween[spaceXBetween as number]}
  ${({ spaceYBetween, theme }) => spaceYBetween && theme.spaceYBetween[spaceYBetween as number]}
`;
