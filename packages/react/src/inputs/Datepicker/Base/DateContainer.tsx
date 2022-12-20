import { Box } from 'data';
import React from 'react';

export const DateContainer: React.FC<WithChildren> = ({ children }) => (
  <Box display="flex" bg="background.0" borderRadius="2" boxShadow="base.1" fontSize="1" lineHeight="1">
    {children}
  </Box>
);
