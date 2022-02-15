import React, { useState } from 'react';
import classNames from 'classnames';
import { XIcon } from 'feedback/Icons/Outline';
import { Title, Panel } from 'data';
import { Backdrop, stopPropagation } from 'utils';
import { ClickableElement } from 'inputs';

export type ModalProps = {
  title?: string;
  panelOverrides?: string;
  handleClose: () => void;
  open?: boolean;
};

const Header: React.FC<{ handleClose: () => void; }> = ({ children, handleClose }) => (
  <div className="inline-flex border-b w-full justify-between">
    <Title className="self-center px-2" as="h3">{children}</Title>
    <ClickableElement onClick={handleClose} className="px-3 py-2 ml-5">
      <XIcon width={20} height={20} />
    </ClickableElement>
  </div>
);

export const Modal: React.FC<ModalProps> = ({ panelOverrides, handleClose, title, children, open }) => {
  let [isOpen, setOpen] = useState(false);
  if (!open) {
    return null;
  }

  return (
    <Backdrop onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <Panel className={classNames('min-w-[200px]', panelOverrides)} onClick={stopPropagation}>
        {title && <Header handleClose={handleClose}>{title}</Header>}
        {children}
      </Panel>
    </Backdrop>
  );
};
