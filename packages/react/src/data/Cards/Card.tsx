import styled from 'styled-components';
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space } from 'styled-system';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & LayoutProps & FlexboxProps & SpaceProps;

export const Card = styled.div<CardProps>`
  ${layout}
  ${flexbox}
  ${space}
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.background[1]};
  box-shadow: ${({ theme }) => theme.shadows.highlight};
  overflow: hidden;
`;
