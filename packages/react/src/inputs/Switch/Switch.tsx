import styled from 'styled-components';
import { variant } from 'styled-system';
import { Colors } from '../../types';

export type SwitchProps = {
  color?: Colors;
  size?: 'small' | 'medium';
} & Omit<React.ComponentPropsWithRef<'input'>, 'size'>;

const Label = styled.label<{ size: 'small' | 'medium'; disabled: boolean; }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: ${({ size, theme }) => size === 'medium' ? theme.sizes[6] : theme.sizes[4]};
  width: ${({ size, theme }) => size === 'medium' ? theme.sizes[12] : theme.sizes[7]};
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.4;
  `}
`;

const Button = styled.div<{ size: 'small' | 'medium' }>`
  input:checked ~ & {
    right: 0%;
    transform: translateX(0%);
  }
  background: ${({ theme }) => theme.colors.baseAccent};
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[8]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  right: 100%;
  transform: translateX(100%);
  height: ${({ size, theme }) => size === 'medium' ? theme.sizes[6] : theme.sizes[4]};
  width: ${({ size, theme }) => size === 'medium' ? theme.sizes[6] : theme.sizes[4]};
  ${({ theme }) => theme.transition}
`;

const Input = styled.input`
  display: none;
`;

export const Switch: React.FC<SwitchProps> = ({
  color = 'primary', size = 'medium', disabled = false,
  ...rest
}) => {
  const Backing = styled.div`
    width: 100%;
    height: ${({ theme }) => size === 'medium' ? theme.sizes[6] : theme.sizes[4]};
    border-radius: ${({ theme }) => theme.radii[8]};
    position: absolute;
    background: ${({ theme }) => theme.colors.background[2]};
    box-shadow: ${({ theme }) => theme.colors.background[2]} 0 0 0 2px;
    ${({ theme }) => theme.transition}
    ${({ theme }) => variant({
    prop: 'color',
    variants: {
      primary: {
        'input:checked ~ &': {
          bg: 'primary',
          boxShadow: `${theme.colors.primary} 0 0 0 2px`,
        },
      },
      success: {
        'input:checked ~ &': {
          bg: 'success',
          boxShadow: `${theme.colors.success} 0 0 0 2px`,
        },
      },
      info: {
        'input:checked ~ &': {
          bg: 'info',
          boxShadow: `${theme.colors.info} 0 0 0 2px`,
        },
      },
      error: {
        'input:checked ~ &': {
          bg: 'error',
          boxShadow: `${theme.colors.error} 0 0 0 2px`,
        },
      },
      warning: {
        'input:checked ~ &': {
          bg: 'warning',
          boxShadow: `${theme.colors.warning} 0 0 0 2px`,
        },
      },
      base: {
        'input:checked ~ &': {
          bg: 'base',
          boxShadow: `${theme.colors.base} 0 0 0 2px`,
        },
      },
    },
  })}`;

  return (
    <Label size={size} disabled={disabled} >
      <Input type="checkbox" disabled={disabled} {...rest} />
      <Backing color={color} />
      <Button size={size} />
    </Label>
  );
};
