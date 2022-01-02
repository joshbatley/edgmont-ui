import React from 'react';
import { XIcon } from 'base/Icons/Outline';
import { Backdrop, Panel, Title, stopPropagation } from 'base';
import { ClickableElement } from 'inputs';
import classNames from 'classnames';

export type ModalProps = {
  title?: string;
  panelOverrides?: string;
  handleClose: () => void;
};


const Header: React.FC<{ handleClose: () => void; }> = ({ children, handleClose }) => (
  <div className="inline-flex border-b w-full justify-between">
    <Title className="self-center px-2" as="h3">{children}</Title>
    <ClickableElement onClick={handleClose} className="px-3 py-2 ml-5">
      <XIcon width={20} height={20} />
    </ClickableElement>
  </div>
);

export const Modal: React.FC<ModalProps> = ({ panelOverrides, handleClose, title, children }) => (
  <Backdrop onClick={handleClose}>
    <Panel className={classNames('min-w-[200px]', panelOverrides)} onClick={stopPropagation}>
      {title && <Header handleClose={handleClose}>{title}</Header>}
      {children}
    </Panel>
  </Backdrop>
);

