import { forwardRef, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Box } from '../../data';
import { BaseInput } from './BaseInput';
import { AddonElement } from './AddonElement';
import { OptionalIcon } from './OptionalIcon';
import { Size } from '../../types';

export type TextFieldProps = {
  error?: boolean;
  before?: ReactElement;
  after?: ReactElement;
  prefiXMarkIcon?: ReactNode;
  suffiXMarkIcon?: ReactNode;
  size?: Size;
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
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }`;
    }
    if (!before && after) {
      return `input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }`;
    }

    if (before && after) {
      return `input {
        border-radius: 0;
      }`;
    }
  }}
`;

const Container = styled(Box) <{ error: boolean; disabled: boolean; }>`
  ${({ theme, error }) => error && `
    color: ${theme.colors.error};
    border: ${theme.borders.error[1]};
  `}
  ${({ theme, disabled }) => disabled && `
    background: ${theme.colors.error};
    cursor: not-allowed;
    div, svg, input {
      cursor: not-allowed;
     }
  `}
`;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  prefiXMarkIcon, suffiXMarkIcon,
  before, after,
  size = 'medium', disabled = false, error = false,
  ...rest
}, ref) => (
  <Container
    error={error}
    disabled={disabled}
    bg="background.0"
    display="flex"
    borderRadius="4"
    boxShadow="hightlight"
  >
    <OptionalIcon position="left" size={size as Size} icon={prefiXMarkIcon} />
    <AddonElement position="left" addon={before} />

    <InputContainer flexGrow="1" before={!!before || !!prefiXMarkIcon} after={!!after || !!suffiXMarkIcon}>
      <BaseInput variant={size as Size} error={error} disabled={disabled} ref={ref} {...rest} />
    </InputContainer>

    <OptionalIcon position="right" size={size as Size} icon={suffiXMarkIcon} />
    <AddonElement position="right" addon={after} />
  </Container>
));
