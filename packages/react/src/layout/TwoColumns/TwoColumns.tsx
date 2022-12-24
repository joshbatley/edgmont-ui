import React from 'react';
import { Box } from 'data';

export type TwoColumnsProps = {
  sideNav?: React.ReactNode;
  children: React.ReactNode,
};

export const TwoColumns: React.FC<TwoColumnsProps> = ({ children, sideNav }) => (
  <Box
    height="100%"
    m-width="0"
    display={{ md: 'grid' }}
    gridTemplateColumns={{ md: '19.5rem auto' }}
    gridAutoFlow={{ md: 'row' }}
  >
    {sideNav}
    {children}
  </Box>
);
