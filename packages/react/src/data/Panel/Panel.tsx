import { Box, BoxProps } from 'data/Box';
import styled from 'styled-components';

export const Panel = styled(Box) <BoxProps>`
  border-radius:${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  background: ${({ theme }) => theme.colors.background[0]};
`;
