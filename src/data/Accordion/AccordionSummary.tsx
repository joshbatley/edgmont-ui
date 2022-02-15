import React from 'react';
import classNames from 'classnames';
import { ChevronRightIcon } from 'feedback/Icons/Solid';
import { ClickableElement } from 'inputs';
import { AccordionProps } from './Accordion';

export const AccordionSummary: React.FC<AccordionProps> = ({ isOpen, onClick, children }) => (
  <ClickableElement className={classNames('w-full px-3 py-2 border-b border-x bg-gray-50 rounded-none first-of-type:rounded-t-md last-of-type:rounded-b-md first-of-type:border-t focus:ring-0 transition-[border-radius] peer', { ['last-of-type:rounded-b-none']: isOpen })} onClick={onClick} >
    <ChevronRightIcon width={16} height={16} className={classNames({ ['rotate-90 transition-all']: isOpen }, 'mr-3')} />{children}
  </ClickableElement>
);
