import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.background[0]};
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  overflow: hidden;
`;
