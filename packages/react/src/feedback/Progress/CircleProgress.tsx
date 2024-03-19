import { darken } from 'polished';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Colors } from '../../types';

export type CircleProgressProps = {
  color?: Colors;
  height?: string | number;
  width?: string | number;
  percentage?: number;
};

const Svg = styled.svg`
  stroke: currentColor;
  transform: rotate(-90deg);
`;

const OuterCircle = styled.circle(({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      stroke: darken(0.1, theme.colors.destructive),
    },
    base: {
      stroke: 'background',
    },
  },
}));

const InnerCircle = styled.circle(variant({
  prop: 'color',
  variants: {
    error: {
      stroke: 'error',
    },
    base: {
      stroke: 'foreground',
    },
  },
}));

export const CircleProgress: React.FC<CircleProgressProps> = ({ color = 'primary', height = 50, width = 50, percentage = 0 }) => {
  let circumference = 2 * Math.PI * ((50 - 4) / 2);
  let strokeDasharray = circumference.toFixed(3);
  let strokeDashoffset = `${(((100 - percentage) / 100) * circumference).toFixed(3)}px`;

  return (
    <Svg viewBox="25 25 50 50" height={height} width={width}>
      <OuterCircle cx="50" cy="50" r="23" fill="none" strokeWidth="4" color={color} />
      <InnerCircle cx="50" cy="50" r="23" fill="none" strokeWidth="4"
        strokeLinecap="round"
        color={color}
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={strokeDasharray}
      />
    </Svg>
  );
};
