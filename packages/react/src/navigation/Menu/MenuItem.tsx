import React from 'react';
import { Button } from 'inputs';

export type MenuItemProps = {
  onClick?: () => void;
} & WithChildren;

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => (
  <Button className="rounded-none font-normal" onClick={onClick}>{children}</Button>
);
