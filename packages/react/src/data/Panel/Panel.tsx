import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export type PanelProps = LayoutProps;

export const Panel = styled.div<PanelProps>`
  ${layout}
  border-radius:${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  background: ${({ theme }) => theme.colors.background[0]};
`;
