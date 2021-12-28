import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: any }) => createPortal(children, document.body);
