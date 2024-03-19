import styled from 'styled-components';
import { darken } from 'polished';
import { variant } from 'styled-system';
import { LinearSlide } from '../../utils';
import { Box } from '../../data';
import { Colors } from '../../types';

export type LinearLoaderProps = {
  color?: Colors;
  height?: string | number;
};

const OuterLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
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

const InnerLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
  ${({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      background: theme.colors.destructive,
    },
    base: {
      background: theme.colors.foreground,
    },
  },
})}`;

const StyledLinearSlider = styled(LinearSlide)`
  width: 33.333333%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const LinearLoader: React.FC<LinearLoaderProps> = ({ color = 'primary', height = 5 }) => (
  <Box overflow="hidden" width="100%" position="relative" borderRadius="8" style={{ height }}>
    <OuterLine color={color} />
    <StyledLinearSlider>
      <InnerLine color={color} style={{ height }} />
    </StyledLinearSlider>
  </Box>
);
