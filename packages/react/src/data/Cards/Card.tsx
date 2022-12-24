import React from 'react';
import styled from 'styled-components';
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space } from 'styled-system';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & LayoutProps & FlexboxProps & SpaceProps;

export const Card = styled.div<CardProps>`
  ${layout}
  ${flexbox}
  ${space}
  border: ${({ theme }) => theme.borders.background2[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.background[0]};
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  overflow: hidden;
`;
