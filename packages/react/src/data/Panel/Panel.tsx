import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export type PanelProps = LayoutProps;

export const Panel = styled.div<PanelProps>`
  ${layout}
  border-radius:${({ theme }) => theme.radii[2]};
  background:${({ theme }) => theme.colors.white};
  box-shadow:${({ theme }) => theme.shadows[1]};
`;
