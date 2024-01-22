import React from 'react';
import { Button } from '../../inputs/Button';
import {WithChildren} from "../../types";

export type MenuItemProps = {
  onClick?: () => void;
} & WithChildren;

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => (
  <Button borderRadius="0" fontWeight="400" onClick={onClick}>{children}</Button>
);
