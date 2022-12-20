import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Title, Panel, Box } from 'data';
import { Backdrop, stopPropagation } from 'utils';
import { ClickableElement } from 'inputs';

export type ModalProps = {
  title?: string;
  handleClose: () => void;
  open?: boolean;
} & WithChildren;

type HeaderProps = {
  handleClose: () => void;
} & WithChildren;


const Header: React.FC<HeaderProps> = ({ children, handleClose }) => (
  <Box display="inline-flex" px="2" alignItems="center" borderBottom="background3.1" width="100%" justifyContent="space-between" >
    <Title as="h3">{children}</Title>
    <ClickableElement px={3} py={2} ml={5} onClick={handleClose}>
      <XMarkIcon width={20} height={20} />
    </ClickableElement>
  </Box>
);

export const Modal: React.FC<ModalProps> = ({ handleClose, title, children, open }) => {
  let [isOpen, setOpen] = useState(false);
  if (!open) {
    return null;
  }

  return (
    <Backdrop onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <Panel minWidth="200px" onClick={stopPropagation}>
        {title && <Header handleClose={handleClose}>{title}</Header>}
        {children}
      </Panel>
    </Backdrop>
  );
};
