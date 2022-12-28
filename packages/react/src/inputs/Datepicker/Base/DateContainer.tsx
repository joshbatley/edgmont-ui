import { Box } from 'data';
import React from 'react';

export const DateContainer: React.FC<WithChildren> = ({ children }) => (
  <Box display="flex" bg="background.1" borderRadius="2" boxShadow="highlight" fontSize="1" lineHeight="1">
    {children}
  </Box>
);
