import React, { forwardRef, ReactElement, ReactNode } from 'react';
import { BaseInput } from './BaseInput';
import { AddonElement } from './AddonElement';
import { OptionalIcon } from './OptionalIcon';
import { Box } from 'data/Box';
import styled from 'styled-components';

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
  ${({ theme, before, after }) => {
    if (!before && after) {
      return `
        border-top-left-radius: ${theme.radii[3]};
        border-bottom-left-radius: ${theme.radii[3]};
      `;
    }
    if (before && !after) {
      return `
        border-top-right-radius: ${theme.radii[3]};
        border-bottom-right-radius: ${theme.radii[3]};
      `;
    }
  }}
`;

const Container = styled(Box) <{ error: boolean; disabled: boolean; }>`
  ${({ theme, error }) => error && `
    color: ${theme.colors.error};
    border: ${theme.borders.error[1]};
    box-shadow: ${theme.shadows.error};
  `}
  ${({ theme, disabled }) => disabled && `
    background: ${theme.colors.lightGray};
    cursor: not-allowed;
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
    bg="white"
    display="flex"
    boxShadow="base.0"
    borderRadius="4"
    border="gray.1"
  >
    <OptionalIcon size={size as Size} icon={prefiXMarkIcon} />
    <AddonElement position="left" addon={before} />

    <InputContainer flexGrow="1" before={!!before} after={!!after}>
      <BaseInput variant={size as Size} error={error} disabled={disabled} ref={ref} {...rest} />
    </InputContainer>

    <OptionalIcon size={size as Size} icon={suffiXMarkIcon} />
    <AddonElement position="right" addon={after} />
  </Container>
));
