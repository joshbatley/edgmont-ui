import styled from 'styled-components';

export type BaseControlProps = {
  labelText?: string;
  icon: React.ReactElement;
  rounded?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const Label = styled.label<{ disabled: boolean; checked?: boolean; }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ theme, disabled }) => disabled ? theme.colors.mutedForeground : theme.colors.foreground};
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  div > svg {
    ${({ theme, checked }) => checked && `
        color: ${theme.colors.background};
    `}
  }

  :hover div  {
    ${({ theme, checked }) => `
        background: ${checked ? theme.colors.foreground : theme.colors.background};
    `}
  }

  :hover div > svg {
    ${({ theme, checked }) => `
        color: ${checked ? theme.colors.background : theme.colors.foreground};
    `}
  }
`;

const Btn = styled.div<{ rounded: boolean; disabled: boolean; }>`
  position: relative;
  width: ${({ theme }) => theme.sizes[4]};
  height: ${({ theme }) => theme.sizes[4]};
  border: ${({ theme }) => theme.borders.background[1]};
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  border: ${({ theme }) => theme.borders.primary[1]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme, rounded }) => rounded ? theme.radii[8] : theme.radii[2]};
  opacity: ${({ disabled }) => disabled ? .5 : 1};
`;

const Box = styled.div<{ checked?: boolean }>`
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100%;
    position: absolute;
    ${({ checked, theme }) => checked && `
      background: ${theme.colors.primary};
    `}

  `;

let Icon = styled.div<{ disabled: boolean; checked?: boolean }>`
    svg {
      color: transparent;
      z-index: 10;
      position: relative;
    }
  `;

const Input = styled.input`
  display: none;
`;

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, icon, rounded = false, disabled = false, ...rest
}) => (
  <Label disabled={disabled} checked={rest.checked}>
    <Btn rounded={rounded} disabled={disabled}>
      <Input disabled={disabled} {...rest} />
      <Box {...rest} />
      <Icon disabled={disabled} {...rest}>{icon}</Icon>
    </Btn>
    {labelText}
  </Label>
);


