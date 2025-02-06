import styled from 'styled-components';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export type StepIconProps = {
  error?: boolean;
  state?: 'completed' | 'active' | 'default';
  icon?: React.ReactNode;
  number: number;
};

const ErrorComp = styled(ExclamationTriangleIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.destructive};
`;

const DefaultSvg = styled.svg<{ state: 'completed' | 'active' | 'default' }>`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ state }) => state === 'default' ? '0.6' : '1'};
`;

const DefaultText = styled.text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
`;


const Checkmark = styled(CheckCircleIcon)`
  color: ${({ theme }) => theme.colors.primary};
  width: 30px;
  height: 30px;
`;

const InnerCirle = styled.circle`
  color: ${({ theme }) => theme.colors.background};
`;

export const StepIcon: React.FC<StepIconProps> = ({
  state = 'default', icon, number, error,
}) => {
  if (icon) {
    return <>{icon}</>;
  }

  if (error) {
    return (
      <ErrorComp />
    );
  }

  if (state === 'active' || state === 'default') {
    return (
      <DefaultSvg fill='currentColor' state={state}>
        <circle cx="50%" cy="50%" r="12" />
        <InnerCirle cx="50%" cy="50%" r="10" />
        <DefaultText x="50%" y="65%" textAnchor="middle">{number}</DefaultText>
      </DefaultSvg>
    );
  }

  return (
    <Checkmark />
  );
};
