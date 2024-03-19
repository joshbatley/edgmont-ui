import styled from 'styled-components';
import { variant } from 'styled-system';
import { darken } from 'polished';
import { Box } from '../../data';
import { Colors } from '../../types';

export type LinearProgressProps = {
  color?: Colors;
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
  ${({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      background: darken(0.1, theme.colors.destructive),
    },
    base: {
      background: theme.colors.background,
    },
  },
})}`;

const InnerLine = styled.div<{ percentage: number }>`
  border-radius: ${({ theme }) => theme.radii[2]};
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  ${({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      background: theme.colors.destructiveForeground,
    },
    base: {
      background: theme.colors.foreground,
    },
  },
})}`;

export const LinearProgress: React.FC<LinearProgressProps> = ({
  color = 'primary', height = 5, percentage = 0,
}) => (
  <Box overflow="hidden" width="100%" position="relative" borderRadius="8" style={{ height }}>
    <OuterLine color={color} />
    <InnerLine color={color} percentage={percentage} />
  </Box>
);

