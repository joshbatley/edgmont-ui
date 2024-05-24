import styled from 'styled-components';

export type CircleProgressProps = {
  height?: string | number;
  width?: string | number;
  percentage?: number;
};

const Svg = styled.svg`
  stroke: currentColor;
  transform: rotate(-90deg);
`;

const OuterCircle = styled.circle`
  color: ${({ theme }) => theme.colors.muted};
`;

const InnerCircle = styled.circle`
  color: ${({ theme }) => theme.colors.foreground};
`;

export const CircleProgress: React.FC<CircleProgressProps> = ({ height = 50, width = 50, percentage = 0 }) => {
  let circumference = 2 * Math.PI * ((50 - 4) / 2);
  let strokeDasharray = circumference.toFixed(3);
  let strokeDashoffset = `${(((100 - percentage) / 100) * circumference).toFixed(3)}px`;

  return (
    <Svg viewBox="25 25 50 50" height={height} width={width}>
      <OuterCircle cx="50" cy="50" r="23" fill="none" strokeWidth="4" />
      <InnerCircle cx="50" cy="50" r="23" fill="none" strokeWidth="4"
        strokeLinecap="round"
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={strokeDasharray}
      />
    </Svg>
  );
};
