import React from 'react';
import { XIcon } from 'feedback/Icons/Solid';
import { ClickableElement, ClickableElementProps } from 'inputs';

export const CloseBtn: React.FC<ClickableElementProps> = ({ onClick }) => (
  <ClickableElement className="float-right py-1 px-2" onClick={onClick}>
    <XIcon width={16} height={16} />
  </ClickableElement>
);
