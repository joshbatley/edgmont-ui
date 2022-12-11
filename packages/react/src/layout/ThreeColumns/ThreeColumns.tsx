import React from 'react';
import { TwoColumns } from 'layout';
import { Box } from 'data';

export type ThreeColumnsProps = {
  sideNav?: React.ReactNode;
  mainNav?: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

export const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  children, sideNav, mainNav, ...rest
}) => (
  <TwoColumns sideNav={sideNav} {...rest}>
    <Box
      height="100%"
      m-width="0"
      display={{ md: 'grid' }}
      gridTemplateColumns={{ md: '19.5rem auto' }}
      gridAutoFlow={{ md: 'row' }}
    >
      {mainNav}
      {children}
    </Box>
  </TwoColumns >
);
