import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radii[3]};
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  overflow: hidden;
`;
