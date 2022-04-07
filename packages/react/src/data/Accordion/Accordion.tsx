import React from 'react';
import { ClickableElement } from 'inputs';
import { Collapse } from 'utils';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetail } from './AccordionDetail';

export type AccordionProps = {
  summary?: React.ReactNode;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Accordion: React.FC<AccordionProps> = ({
  summary, children, onClick, isOpen,
}) => {
  let accodingTitle = typeof summary === 'string' ?
    <AccordionSummary onClick={onClick} isOpen={isOpen}>{summary}</AccordionSummary> :
    <ClickableElement onClick={onClick}>{summary}</ClickableElement>;

  let details = typeof children === 'string' ?
    <AccordionDetail>{children}</AccordionDetail> :
    children;

  return (
    <>
      {accodingTitle}
      <Collapse inProp={isOpen}>
        {details}
      </Collapse>
    </>
  );
};
