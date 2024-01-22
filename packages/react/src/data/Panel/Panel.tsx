import styled from 'styled-components';
import { Box, BoxProps } from '../Box';

export const Panel: typeof Box = styled(Box) <BoxProps>`
  border-radius:${({ theme }) => theme.radii[5]};
  box-shadow: ${({ theme }) => theme.shadows.highlight};
  background: ${({ theme }) => theme.colors.background[1]};
`;
