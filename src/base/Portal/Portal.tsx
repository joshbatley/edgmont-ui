import { createPortal } from 'react-dom';

export type PortalProps = {
  children: any;
  element?: Element;
};

export const Portal = ({ children, element }: PortalProps) => createPortal(children, element || document.body);
