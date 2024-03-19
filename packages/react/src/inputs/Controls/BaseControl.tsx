import styled from 'styled-components';
import { Colors } from '../../types';

export type BaseControlProps = {
  labelText?: string;
  color?: Colors;
  icon: React.ReactElement;
  rounded?: boolean;
  error?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const Label = styled.label<{ disabled: boolean; }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
`;

const Btn = styled.div<{ rounded: boolean; error: boolean; }>`
  position: relative;
  width: ${({ theme }) => theme.sizes[4]};
  height: ${({ theme }) => theme.sizes[4]};
  border: ${({ theme }) => theme.borders.background[1]};
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme, rounded }) => rounded ? theme.radii[8] : theme.radii[3]};
  ${({ error, theme }) => error && `
    border-color: ${theme.colors.destructive};
  `}
`;

const Box = styled.div<{ disabled: boolean; error: boolean; }>`
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100%;
    position: absolute;
    input:checked ~ & {
      background: ${({ theme, error, disabled }) =>
    error ? theme.colors.destructive :
      disabled ? theme.colors.muted : theme.colors.primary};
    }
    ${Label}:hover input:checked ~ & {
      background: ${({ theme, error, disabled }) =>
    error ? theme.colors.destructive :
      disabled ? theme.colors.muted : theme.colors.primary};
    }
  `;

let Icon = styled.div<{ disabled: boolean; error: boolean; }>`
    svg {
      width: 16px;
      height: 16px;
      color: transparent;
      z-index: 10;
      position: relative;
      ${Label} input:checked ~ & {
        color: ${({ theme }) => theme.colors.background};
      }
      ${({ theme, disabled, error }) => !disabled && `
        ${Label}:hover & {
          color: ${error ? theme.colors.destructive : theme.colors.primary};
        }
      `}
    }
  `;

const Input = styled.input`
  display: none;
`;

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, icon, rounded = false, disabled = false, error = false, ...rest
}) => (
  <Label disabled={disabled}>
    <Btn rounded={rounded} error={error}>
      <Input disabled={disabled} {...rest} />
      <Box disabled={disabled} error={error} />
      <Icon disabled={disabled} error={error}>{icon}</Icon>
    </Btn>
    {labelText}
  </Label>
);


