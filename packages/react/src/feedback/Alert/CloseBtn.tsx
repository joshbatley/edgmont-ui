import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ClickableElement, ClickableElementProps } from 'inputs';

export const CloseBtn: React.FC<ClickableElementProps> = ({ onClick }) => (
  <ClickableElement className="float-right py-1 px-2" onClick={onClick}>
    <XMarkIcon width={16} height={16} />
  </ClickableElement>
);
