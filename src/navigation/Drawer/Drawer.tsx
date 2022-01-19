import React, { useState } from 'react';
import { Backdrop, stopPropagation } from 'base';
import classNames from 'classnames';
import { Open } from 'utils';

export type DrawerProps = {
  open?: boolean;
  direction?: 'left' | 'right';
  handleClose: () => void;
};

export const Drawer: React.FC<DrawerProps> = ({
  open, handleClose, direction = 'right', children,
}) => {
  let [isOpen, setOpen] = useState(false);

  if (!open) {
    return null;
  }

  let classes = classNames('fixed w-1/3 h-screen top-0', direction === 'left' ? 'left-0' : 'right-0');
  let drawerClasses = classNames('w-full h-full bg-white');
  return (
    <Backdrop config={{ duration: 195 }} onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <Open inProp={isOpen} className={classes}>
        <div onClick={stopPropagation} className={drawerClasses}>
          {children}
        </div>
      </Open>
    </Backdrop >
  );
};
