import React from 'react';
import styled from 'styled-components';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ClickableElement } from 'inputs/Button/ClickableElement';
import { AccordionProps } from './Accordion';

const StyledSummary = styled(ClickableElement) <AccordionProps>`
  width: 100%;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  border-bottom: ${({ theme }) => theme.borders.background2[1]};
  border-left: ${({ theme }) => theme.borders.background2[1]};
  border-right: ${({ theme }) => theme.borders.background2[1]};
  background: ${({ theme }) => theme.colors.background[1]};
  border-radius: 0;
  &:focus {
    box-shadow: none;
  }
  &:first-of-type {
    border-top: ${({ theme }) => theme.borders.background2[1]};
    border-top-left-radius: ${({ theme }) => theme.radii[3]};
    border-top-right-radius: ${({ theme }) => theme.radii[3]};
  }
  &:last-of-type {
    ${({ theme, isOpen }) => isOpen && `
      border-bottom-left-radius: ${theme.radii[3]};
      border-bottom-right-radius: ${theme.radii[3]};
    `}
  }
`;

const StyledIcon = styled(ChevronRightIcon) <{ isOpen?: boolean }>`
  margin-right: ${({ theme }) => theme.space[3]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${({ isOpen }) => isOpen && `
    transform: rotate(90deg);
  `}
`;

export const AccordionSummary: React.FC<AccordionProps> = ({ isOpen, onClick, children }) => (
  <StyledSummary onClick={onClick}>
    <StyledIcon
      width={16}
      height={16}
      isOpen={isOpen}
    />{children}
  </StyledSummary>
);
