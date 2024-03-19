import styled from 'styled-components';
import { StepIcon } from './StepIcon';
import { useStepperContext } from './StepperContext';
import { Colors, Direction, WithChildren } from '../../types';

export type StepLabelProps = {
  icon?: React.ReactNode;
  idx?: number;
  state?: 'completed' | 'active' | 'default';
  error?: boolean;
  color?: Colors;
} & WithChildren;

const Line = styled.div<{ direction: Direction }>`
  left: calc(-50% + 30px);
  right: calc(50% + 30px);
  background: ${({ theme }) => theme.colors.background};
  flex: 1 1 auto;
  width: 1px;
  ${({ direction }) => direction === 'vertical' ? 'height: 100%; width: 1px;' : 'height: 1px;'}
`;

const AlternativeLine = styled.div<{ direction: Direction }>`
  left: calc(-50% + 30px);
  right: calc(50% + 30px);
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  top: ${({ theme }) => theme.sizes[3]};
  flex: 1 1 auto;
  ${({ direction }) => direction === 'vertical' ? 'height: 100%;' : 'height: 1px;'}
`;

const Label = styled.div<{ alternativeLabel: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  ${({ alternativeLabel }) => alternativeLabel ? `
    flex-direction: column;
    flex: 1 1 0%;
  ` : `
    > :not([hidden]) ~ :not([hidden]) {
      margin-left: 0.5rem;
    }
   `}
`;

const LineContainer = styled.div<{ direction: Direction }>`
  flex: 1 1 auto;
  display: flex;
  width: 1px;
  align-items: center;
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[3]};
  ${({ direction, theme }) => direction === 'vertical' && `
    margin-top: ${theme.space[3]};
    margin-bottom: ${theme.space[3]};
  `}
`;

export const StepLabel: React.FC<StepLabelProps> = ({
  icon, children, idx = 0, state, error,
}) => {
  let { direction, alternativeLabel, noOfItems } = useStepperContext();

  if (alternativeLabel) {
    return (
      <Label alternativeLabel={alternativeLabel}>
        {idx !== 0 && <AlternativeLine direction={direction} />}
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} />
        {children}
      </Label>
    );
  }
  return (
    <>
      <Label alternativeLabel={false}>
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} />
        <span>{children}</span>
      </Label>
      {idx !== noOfItems && (
        <LineContainer direction={direction}>
          <Line direction={direction} />
        </LineContainer>
      )}
    </>
  );
};
