import { Box } from '../../../data';
import { WithChildren } from '../../../types';

export const DateContainer: React.FC<WithChildren> = ({ children }) => (
  <Box display="flex" p="3" bg="background" borderRadius="2" boxShadow="base.1" border="border.1" fontSize="1" lineHeight="1">
    {children}
  </Box>
);
