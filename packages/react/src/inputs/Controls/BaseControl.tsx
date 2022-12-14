import React from 'react';
import styled from 'styled-components';

export type BaseControlProps = {
  labelText?: string;
  color?: Colors;
  icon: React.ReactElement;
  rounded?: boolean;
  error?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const getColor = (theme: any, dark: boolean) => ({
  primary: dark ? theme.colors.primaryDark : theme.colors.primary,
  success: dark ? theme.colors.successDark : theme.colors.success,
  info: dark ? theme.colors.infoDark : theme.colors.info,
  error: dark ? theme.colors.errorDark : theme.colors.error,
  warning: dark ? theme.colors.warningDark : theme.colors.warning,
  dark: dark ? theme.colors.baseDark : theme.colors.dark,
});

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
  border: ${({ theme }) => theme.borders.gray[1]};
  background: #fff;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme, rounded }) => rounded ? theme.radii[8] : theme.radii[3]};
  ${({ error, theme }) => error && `
    border-color: ${theme.colors.error};
    box-shadow: ${theme.shadows.error};
  `}
`;

const Box = styled.div<{ disabled: boolean; color: Colors; error: boolean; }>`
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  ${({ theme, disabled, color, error }) => disabled ? `
    input:checked ~ & {
      background: ${theme.colors.lightGray};
    }
    ${Label}:hover input:checked ~ & {
      background: ${theme.colors.gray};
    }
  ` : `
    input:checked ~ & {
      background: ${getColor(theme, false)[error ? 'error' : color]};
    }
    ${Label}:hover input:checked ~ & {
      background: ${getColor(theme, true)[error ? 'error' : color]};
    }
  `}
`;

let Icon = styled.div<{ disabled: boolean, color: Colors; }>`
  svg {
    width: 16px;
    height: 16px;
    color: transparent;
    z-index: 10;
    position: relative;
    input:checked ~ & {
      color:#fff!important;
    }
    ${({ disabled, color, theme }) => !disabled && `
      ${Label}:hover & {
        color: ${getColor(theme, false)[color]};
      }
    `}
  }
`;

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, color = 'primary', icon, rounded = false, disabled = false, error = false, ...rest
}) => {
  return (
    <Label disabled={disabled}>
      <Btn rounded={rounded} error={error}>
        <input className="peer hidden" disabled={disabled} {...rest} />
        <Box disabled={disabled} color={color} error={error} />
        <Icon color={color} disabled={disabled}>{icon}</Icon>
      </Btn>
      {labelText}
    </Label>
  );
};
