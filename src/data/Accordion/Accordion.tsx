import React from 'react';
import classNames from 'classnames';
import { ClickableElement } from 'inputs';
import { ChevronRightIcon } from 'feedback/Icons/Solid';
import { Collapse } from 'utils';

export type AccordionProps = {
  summary?: React.ReactNode;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const AccordionSummary: React.FC<AccordionProps> = ({ isOpen, onClick, children }) => (
  <ClickableElement className={classNames('w-full px-3 py-2 border-b border-x bg-gray-50 rounded-none first-of-type:rounded-t-md last-of-type:rounded-b-md first-of-type:border-t focus:ring-0 transition-[border-radius] peer', { ['last-of-type:rounded-b-none']: isOpen })} onClick={onClick} >
    <ChevronRightIcon width={16} height={16} className={classNames({ ['rotate-90 transition-all']: isOpen }, 'mr-3')} />{children}
  </ClickableElement>
);

export const AccordionDetail: React.FC = ({ children, ...rest }) => (
  <div className="bg-white px-3 py-2 border-x border-b shadow-inner group-last-of-type:rounded-b-md" {...rest}>{children}</div>
);


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

