import React from 'react';
import { TwoColumns } from '../TwoColumns';
import { Box } from '../../data';

export type ThreeColumnsProps = {
  sideNav?: React.ReactNode;
  mainNav?: React.ReactNode;
  children: React.ReactNode,
};

export const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  children, sideNav, mainNav,
}) => (
  <TwoColumns sideNav={sideNav}>
    <Box
      height="100%"
      minWidth="0"
      display={{ md: 'grid' }}
      gridTemplateColumns={{ md: '19.5rem auto' }}
      gridAutoFlow={{ md: 'row' }}
    >
      {mainNav}
      {children}
    </Box>
  </TwoColumns >
);
