import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { HighlightButton } from 'inputs';

export type LeftNavigationProps = {
  decreaseYear?: () => void;
  decreaseMonth?: () => void;
};

export const LeftNavigation: React.FC<LeftNavigationProps> = ({ decreaseYear, decreaseMonth }) => (
  <>
    {decreaseYear && (
      <HighlightButton size='small' onClick={decreaseYear}>
        <ChevronDoubleLeftIcon width={16} height={16} />
      </HighlightButton>
    )}
    {decreaseMonth && (
      <HighlightButton size='small' onClick={decreaseMonth}>
        <ChevronLeftIcon width={16} height={16} />
      </HighlightButton>
    )}
  </>
);

export type RightNavigationProps = {
  increaseYear?: () => void;
  increaseMonth?: () => void;
};

export const RightNavigation: React.FC<RightNavigationProps> = ({ increaseYear, increaseMonth }) => (
  <>
    {increaseMonth && (
      <HighlightButton size='small' onClick={increaseMonth}>
        <ChevronRightIcon width={16} height={16} />
      </HighlightButton>
    )}
    {increaseYear && (
      <HighlightButton size='small' onClick={increaseYear}>
        <ChevronDoubleRightIcon width={16} height={16} />
      </HighlightButton>
    )}
  </>
);
