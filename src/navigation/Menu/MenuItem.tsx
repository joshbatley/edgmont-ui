import React from 'react';
import { HighlightButton } from 'inputs';

export type MenuItemProps = {
  onClick?: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => (
  <HighlightButton className="rounded-none font-normal" onClick={onClick}>{children}</HighlightButton>
);
