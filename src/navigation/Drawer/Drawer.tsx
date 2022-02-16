import React, { useState } from 'react';
import clsx from 'clsx';
import { Backdrop, stopPropagation, Open } from 'utils';

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

  return (
    <Backdrop config={{ duration: 195 }} onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <Open inProp={isOpen} className={clsx('fixed w-1/3 h-screen top-0', direction === 'left' ? 'left-0' : 'right-0')}>
        <div onClick={stopPropagation} className={'w-full h-full bg-white'}>
          {children}
        </div>
      </Open>
    </Backdrop >
  );
};
