import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { darken } from 'polished';

export type LinearProgressProps = {
  color?: ColorsAndWhiteLegacy;
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
    primary: {
      background: theme.colors.primaryHighlight,
    },
    success: {
      background: darken(0.1, theme.colors.successHighlight),
    },
    info: {
      background: darken(0.1, theme.colors.infoHighlight),
    },
    error: {
      background: darken(0.1, theme.colors.errorHighlight),
    },
    warning: {
      background: darken(0.1, theme.colors.warningHighlight),
    },
    dark: {
      background: theme.colors.background[3],
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
    primary: {
      background: theme.colors.primary,
    },
    success: {
      background: theme.colors.success,
    },
    info: {
      background: theme.colors.info,
    },
    error: {
      background: theme.colors.error,
    },
    warning: {
      background: theme.colors.warning,
    },
    dark: {
      background: theme.colors.baseHighlight,
    },
  },
})}`;

export const LinearProgress: React.FC<LinearProgressProps> = ({
  color = 'primary', height = 5, percentage = 0,
}) => (
  <div className="overflow-hidden w-full relative rounded" style={{ height }}>
    <OuterLine color={color} />
    <InnerLine color={color} percentage={percentage} />
  </div>
);

