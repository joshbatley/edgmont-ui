import styled from 'styled-components';
import { variant } from 'styled-system';

export type SkeletonProps = {
  variant?: 'text' | 'rectangle' | 'circle';
  height?: number;
  width?: number;
};

export const Skeleton = styled.div<SkeletonProps>`
  ${({ theme }) => theme.animations.pulse}
  background: ${({ theme }) => theme.colors.lightGray};
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
      borderRadius: theme.radii[3],
      display: 'flex',
      height: 'full',
      fontSize: '50%',
      ':before': {
        content: '\\00a0',
        height: '50%',
      },
    },
  },
})}
`;
