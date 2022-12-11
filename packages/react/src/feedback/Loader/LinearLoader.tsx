import React from 'react';
import { LinearSlide } from 'utils';
import styled from 'styled-components';
import { darken } from 'polished';
import { variant } from 'styled-system';

export type LinearLoaderProps = {
  color?: ColorsAndWhiteLegacy;
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
    primary: {
      background: theme.colors.primaryLight,
    },
    success: {
      background: darken(0.1, theme.colors.successLight),
    },
    info: {
      background: darken(0.1, theme.colors.infoLight),
    },
    error: {
      background: darken(0.1, theme.colors.errorLight),
    },
    warning: {
      background: darken(0.1, theme.colors.warningLight),
    },
    dark: {
      background: theme.colors.gray,
    },
  },
})}`;

const InnerLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
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
      background: theme.colors.baseLight,
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
  <div className="overflow-hidden w-full relative rounded" style={{ height }}>
    <OuterLine color={color} />
    <StyledLinearSlider>
      <InnerLine color={color} style={{ height }} />
    </StyledLinearSlider>
  </div>
);
