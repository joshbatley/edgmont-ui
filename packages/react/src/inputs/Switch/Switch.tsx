import styled from 'styled-components';

export type SwitchProps = React.ComponentPropsWithRef<'input'>;

const Label = styled.label<{ disabled: boolean; }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: ${({ theme }) => theme.sizes[4]};
  width: ${({ theme }) => theme.sizes[8]};
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.4;
  `}
`;

const Button = styled.div`
  input:checked ~ & {
    right: 0%;
    transform: translateX(0%);
  }
  background: ${({ theme }) => theme.colors.background};
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[8]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  right: 100%;
  transform: translateX(100%);
  height: ${({ theme }) => theme.sizes[4]};
  width: ${({ theme }) => theme.sizes[4]};
  ${({ theme }) => theme.transition}
`;

const Input = styled.input`
  display: none;
`;

const Backing = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.sizes[4]};
    border-radius: ${({ theme }) => theme.radii[8]};
    position: absolute;
    background: ${({ theme }) => theme.colors.input};
    box-shadow: ${({ theme }) => theme.colors.input} 0 0 0 2px;
    input:checked ~ & {
      background:  ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.colors.primary} 0 0 0 2px;
    }

    ${({ theme }) => theme.transition}
`;

export const Switch: React.FC<SwitchProps> = ({ disabled = false, ...rest }) => (
  <Label disabled={disabled} >
    <Input type="checkbox" disabled={disabled} {...rest} />
    <Backing />
    <Button />
  </Label>
);
