import styled from 'styled-components';
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, ColorProps, color, background } from 'styled-system';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & LayoutProps & FlexboxProps & SpaceProps & ColorProps;

export const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii[3]};
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  border:${({ theme }) => theme.borders.border[1]};
  overflow: hidden;
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${background}
`;
