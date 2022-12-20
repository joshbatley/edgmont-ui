import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

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
    primary: {
      stroke: 'primaryHighlight',
    },
    success: {
      stroke: darken(0.1, theme.colors.successHighlight),
    },
    info: {
      stroke: darken(0.1, theme.colors.infoHighlight),
    },
    error: {
      stroke: darken(0.1, theme.colors.errorHighlight),
    },
    warning: {
      stroke: darken(0.1, theme.colors.warningHighlight),
    },
    dark: {
      stroke: 'background.3',
    },
  },
}));

const InnerCircle = styled.circle(variant({
  prop: 'color',
  variants: {
    primary: {
      stroke: 'primary',
    },
    success: {
      stroke: 'success',
    },
    info: {
      stroke: 'info',
    },
    error: {
      stroke: 'error',
    },
    warning: {
      stroke: 'warning',
    },
    dark: {
      stroke: 'baseHighlight',
    },
  },
}));

export const CircleLoader: React.FC<CircleLoaderProps> = ({ color = 'primary', height = 50, width = 50, ...rest }) => (
  <Svg viewBox="25 25 50 50" height={height} width={width} {...rest} >
    <OuterCircle cx="50" cy="50" r="20" fill="none" strokeWidth="4" color={color} />
    <InnerCircle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" color={color} />
  </Svg>
);

