import { forwardRef, ReactElement } from 'react';
import styled from 'styled-components';
import { Box } from '../../data';
import { BaseInput } from './BaseInput';
import { AddonElement } from './AddonElement';
import { OptionalIcon } from './OptionalIcon';

export type TextFieldProps = {
  before?: ReactElement;
  after?: ReactElement;
  prefiXMarkIcon?: ReactElement;
  suffiXMarkIcon?: ReactElement;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number' | 'email';
} & React.ComponentPropsWithRef<'input'>;

const Container = styled(Box) <{ disabled: boolean; }>`
  overflow: hidden;
  :focus-within {
    border: ${({ theme }) => theme.borders.primary[1]};
  }
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    div, svg, input {
      cursor: not-allowed;
     }
  `}
`;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  prefiXMarkIcon, suffiXMarkIcon,
  before, after, disabled = false,
  ...rest
}, ref) => (
  <Container
    disabled={disabled}
    bg="background"
    display="flex"
    borderRadius="3"
    border="border.1"
    boxShadow="base.0"
  >
    <OptionalIcon icon={prefiXMarkIcon} />
    <AddonElement addon={before} />

    <BaseInput disabled={disabled} ref={ref} {...rest} />

    <OptionalIcon icon={suffiXMarkIcon} />
    <AddonElement addon={after} />
  </Container>
));
