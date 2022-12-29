import React from 'react';
import styled from 'styled-components';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export type StepIconProps = {
  error?: boolean;
  state?: 'completed' | 'active' | 'default';
  icon?: React.ReactNode;
  number: number;
};

const Error = styled(ExclamationTriangleIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.error};
`;

const DefaultSvg = styled.svg<{ state: 'completed' | 'active' | 'default' }>`
  width: 30px;
  height: 30px;
  ${({ state, theme }) => state === 'default' ? `color: ${theme.colors.background[3]}` : `color: ${theme.colors.primary}`}
`;

const DefaultText = styled.text`
  color: ${({ theme }) => theme.colors.background[0]};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
`;

const Checkmark = styled(CheckCircleIcon)`
  color: ${({ theme }) => theme.colors.primary};
  width: 30px;
  height: 30px;
`;

export const StepIcon: React.FC<StepIconProps> = ({
  state = 'default', icon, number, error,
}) => {
  if (icon) {
    return <>{icon}</>;
  }

  if (error) {
    return (
      <Error />
    );
  }

  if (state === 'active' || state === 'default') {
    return (
      <DefaultSvg fill='currentColor' state={state}>
        <circle cx="50%" cy="50%" r="12" />
        <DefaultText x="50%" y="65%" textAnchor="middle">{number}</DefaultText>
      </DefaultSvg>
    );
  }

  return (
    <Checkmark />
  );
};
