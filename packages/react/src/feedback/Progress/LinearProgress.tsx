import styled from 'styled-components';
import { Box } from '../../data';

export type LinearProgressProps = {
  height?: string | number;
  percentage?: number;
};

const OuterLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[8]};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: ${({ theme }) => theme.colors.muted};
`;

const InnerLine = styled.div<{ percentage: number }>`
  border-radius: ${({ theme }) => theme.radii[2]};
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: ${({ theme }) => theme.colors.foreground};
`;

export const LinearProgress: React.FC<LinearProgressProps> = ({ height = 5, percentage = 0 }) => (
  <Box overflow="hidden" width="100%" position="relative" borderRadius="8" style={{ height }}>
    <OuterLine />
    <InnerLine percentage={percentage} />
  </Box>
);

