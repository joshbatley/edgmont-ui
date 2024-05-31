import styled from 'styled-components';

export type CircleLoaderProps = {
  height?: string | number;
  width?: string | number;
  destructive?: boolean;
};

const Svg = styled.svg`
  ${({ theme }) => theme.animations.spin};
  stroke: currentColor;
`;

const OuterCircle = styled.circle`
  color: ${({ theme }) => theme.colors.muted};
`;

const InnerCircle = styled.circle<{ destructive: boolean }>`
  color: ${({ theme, destructive }) => destructive ? theme.colors.destructive : theme.colors.primary};
`;

export const CircleLoader: React.FC<CircleLoaderProps> = ({ height = 50, width = 50, destructive = false, ...rest }) => (
  <Svg viewBox="25 25 50 50" height={height} width={width} {...rest} >
    <OuterCircle cx="50" cy="50" r="20" fill="none" strokeWidth="4" />
    <InnerCircle destructive={destructive} cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeDashoffset="-50" strokeDasharray="60" strokeLinecap="round" />
  </Svg>
);

