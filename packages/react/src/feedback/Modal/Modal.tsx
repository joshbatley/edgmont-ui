import React, { useState } from 'react';
import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';
import { Title, Panel } from 'data';
import { Backdrop, stopPropagation } from 'utils';
import { ClickableElement } from 'inputs';

export type ModalProps = {
  title?: string;
  panelClasses?: string;
  handleClose: () => void;
  open?: boolean;
} & WithChildren;

type HeaderProps = {
  handleClose: () => void;
} & WithChildren;

const Header: React.FC<HeaderProps> = ({ children, handleClose }) => (
  <div className="inline-flex border-b w-full justify-between">
    <Title className="self-center px-2" as="h3">{children}</Title>
    <ClickableElement onClick={handleClose} className="px-3 py-2 ml-5">
      <XIcon width={20} height={20} />
    </ClickableElement>
  </div>
);

export const Modal: React.FC<ModalProps> = ({ panelClasses, handleClose, title, children, open }) => {
  let [isOpen, setOpen] = useState(false);
  if (!open) {
    return null;
  }

  return (
    <Backdrop onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <Panel className={clsx('min-w-[200px]', panelClasses)} onClick={stopPropagation}>
        {title && <Header handleClose={handleClose}>{title}</Header>}
        {children}
      </Panel>
    </Backdrop>
  );
};
