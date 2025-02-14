import styled from 'styled-components';
import { Box, BoxProps } from '../Box';

export const Panel: typeof Box = styled(Box) <BoxProps>`
  border-radius:${({ theme }) => theme.radii[4]};
  border: ${({ theme }) => theme.borders.border[1]};
  background: ${({ theme }) => theme.colors.offsetBackground};
`;
