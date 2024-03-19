import { darken } from 'polished';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Colors } from '../../types';

export type CircleLoaderProps = {
  color?: Colors;
  height?: string | number;
  width?: string | number;
};

const Svg = styled.svg`
  ${({ theme }) => theme.animations.spin};
  stroke: currentColor;
`;

const OuterCircle = styled.circle(({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      stroke: darken(0.1, theme.colors.destructive),
    },
    base: {
      stroke: darken(0.1, theme.colors.background),
    },
  },
}));

const InnerCircle = styled.circle(variant({
  prop: 'color',
  variants: {
    error: {
      stroke: 'destructive',
    },
    base: {
      stroke: 'foreground',
    },
  },
}));

export const CircleLoader: React.FC<CircleLoaderProps> = ({ color = 'primary', height = 50, width = 50, ...rest }) => (
  <Svg viewBox="25 25 50 50" height={height} width={width} {...rest} >
    <OuterCircle cx="50" cy="50" r="20" fill="none" strokeWidth="4" color={color} />
    <InnerCircle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" color={color} />
  </Svg>
);

