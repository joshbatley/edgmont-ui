import { Box, BoxProps } from '../Box';
import styled from 'styled-components';

export const Panel = styled(Box) <BoxProps>`
  border-radius:${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows.highlight};
  background: ${({ theme }) => theme.colors.background[1]};
`;
