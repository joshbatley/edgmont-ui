import { forwardRef, ReactElement } from 'react';
import styled from 'styled-components';
import { Box } from '../../data';
import { BaseInput } from './BaseInput';
import { AddonElement } from './AddonElement';
import { OptionalIcon } from './OptionalIcon';

export type TextFieldProps = {
  error?: boolean;
  before?: ReactElement;
  after?: ReactElement;
  prefiXMarkIcon?: ReactElement;
  suffiXMarkIcon?: ReactElement;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number' | 'email';
} & React.ComponentPropsWithRef<'input'>;

const InputContainer = styled(Box) <{ before: boolean; after: boolean; }>`
  &:focus-within {
    z-index: 10;
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
  ${({ before, after }) => {
    if (before && !after) {
      return `input {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }`;
    }
    if (!before && after) {
      return `input {
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }`;
    }

    if (before && after) {
      return `input {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
      }`;
    }
  }}
`;

const Container = styled(Box) <{ error: boolean; disabled: boolean; }>`
  ${({ theme, error }) => error && `
    color: ${theme.colors.destructive};
    border: ${theme.borders.destructive[1]};
  `}
  ${({ theme, disabled }) => disabled && `
    background: ${theme.colors.destructive};
    cursor: not-allowed;
    div, svg, input {
      cursor: not-allowed;
     }
  `}
`;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  prefiXMarkIcon, suffiXMarkIcon,
  before, after, disabled = false, error = false,
  ...rest
}, ref) => (
  <Container
    error={error}
    disabled={disabled}
    bg="background.0"
    display="flex"
    borderRadius="4"
    border="border.1"
    boxShadow="base.0"
  >
    <OptionalIcon position="left" icon={prefiXMarkIcon} />
    <AddonElement position="left" addon={before} />

    <InputContainer flexGrow="1" before={!!before || !!prefiXMarkIcon} after={!!after || !!suffiXMarkIcon}>
      <BaseInput error={error} disabled={disabled} ref={ref} {...rest} />
    </InputContainer>

    <OptionalIcon position="right" icon={suffiXMarkIcon} />
    <AddonElement position="right" addon={after} />
  </Container>
));
