import React from 'react';
import { Box } from 'data';

export const CenteredWidget: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, ...rest }) => (
  <Box maxWidth="36rem" mx="auto" {...rest}>{children}</Box>
);
