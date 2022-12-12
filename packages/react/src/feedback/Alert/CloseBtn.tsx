import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ClickableElement, ClickableElementProps } from '../../inputs/Button/ClickableElement';
import styled from 'styled-components';

const StyledButton = styled(ClickableElement)`
  float:right;
  padding: ${({ theme }) => `${theme.sizes[1]} ${theme.sizes[2]}`};
`;

export const CloseBtn: React.FC<ClickableElementProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <XMarkIcon width={16} height={16} />
  </StyledButton>
);
