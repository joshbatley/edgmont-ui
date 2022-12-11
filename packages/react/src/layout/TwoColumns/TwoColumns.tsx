import React from 'react';
import { Box } from 'data';

export type TwoColumnsProps = {
  sideNav?: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

export const TwoColumns: React.FC<TwoColumnsProps> = ({ children, sideNav, ...rest }) => (
  <Box
    height="100%"
    m-width="0"
    display={{ md: 'grid' }}
    gridTemplateColumns={{ md: '19.5rem auto' }}
    gridAutoFlow={{ md: 'row' }}
    {...rest}
  >
    {sideNav}
    {children}
  </Box>
);
