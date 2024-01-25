import { Box } from '../../../data';
import { WithChildren } from '../../../types';

export const DateContainer: React.FC<WithChildren> = ({ children }) => (
  <Box display="flex" bg="background.1" borderRadius="2" boxShadow="highlight" fontSize="1" lineHeight="1">
    {children}
  </Box>
);
