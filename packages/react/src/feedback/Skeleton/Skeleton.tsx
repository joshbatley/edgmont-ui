import styled from 'styled-components';
import { LayoutProps, SpaceProps, layout, space, variant } from 'styled-system';

export type SkeletonProps = {
  variant?: 'text' | 'rectangle' | 'circle';
} & LayoutProps & SpaceProps;

const Comp = styled.div<SkeletonProps>`
  ${({ theme }) => theme.animations.pulse}
  background: ${({ theme }) => theme.colors.background};
  ${layout}
  ${space}
  ${({ theme, height, width }) => variant({
  prop: 'variant',
  variants: {
    circle: {
      borderRadius: theme.radii[8],
      height: height + 'px',
      width: width + 'px',
    },
    rectangle: {
      borderRadius: theme.radii[3],
      height: height + 'px',
      width: width + 'px',
    },
    text: {
      display: 'inline-flex',
      borderRadius: theme.radii[3],
    },
  },
})}
`;

export const Skeleton: React.FC<SkeletonProps> = ({ ...rest }) => (
  <Comp {...rest}>&nbsp;</Comp>
);
