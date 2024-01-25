import React from 'react';
import { ClickableElement } from '../../inputs/Button';
import { Collapse } from '../../utils/Transitions';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetail, DetailsGrouping } from './AccordionDetail';

export type AccordionProps = {
  summary?: React.ReactNode;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({
  summary,
  children,
  onClick,
  isOpen,
}) => {
  let accodingTitle =
    typeof summary === 'string' ? (
      <AccordionSummary onClick={onClick} isOpen={isOpen}>
        {summary}
      </AccordionSummary>
    ) : (
      <ClickableElement onClick={onClick}>{summary}</ClickableElement>
    );

  let details =
    typeof children === 'string' ? (
      <AccordionDetail>{children}</AccordionDetail>
    ) : (
      children
    );

  return (
    <>
      {accodingTitle}
      <DetailsGrouping>
        <Collapse inProp={isOpen}>{details}</Collapse>
      </DetailsGrouping>
    </>
  );
};
