import React from 'react';
import { Backdrop, stopPropagation } from 'base';
import classNames from 'classnames';

export type DrawerProps = {
  open?: boolean;
  direction?: 'left' | 'right';
  handleClose: () => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open = false, handleClose, direction = 'right', children }) => {
  if (!open) {
    return null;
  }
  let drawerClasses = classNames('fixed w-1/3 h-full bg-white', direction === 'left' ? 'left-0' : 'right-0');
  return (
    <Backdrop onClick={handleClose}>
      <div onClick={stopPropagation} className={drawerClasses}>
        {children}
      </div>
    </Backdrop >
  );
};
