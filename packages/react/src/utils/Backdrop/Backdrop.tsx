import React, { useCallback, useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Portal, Fade, FadeProps } from 'utils';

export const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

type BackdropProps = {
  onClick: () => void;
} & FadeProps;

export const Backdrop: React.FC<BackdropProps> = ({
  children, onClick, ...rest
}) => {
  let [open, setOpen] = useState(true);

  let handleClickBackdrop = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setOpen(false);
    },
    [setOpen],
  );

  let closeModalOnESC = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
      }
    },
    [setOpen],
  );

  useEffect(() => {
    window.addEventListener('keyup', closeModalOnESC);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keyup', closeModalOnESC);
      document.body.style.overflow = 'unset';
    };
  }, [closeModalOnESC]);

  return (
    <Portal>
      <FocusLock>
        <Fade inProp={open} onProps={onClick} {...rest}>
          <div
            className="w-screen h-full fixed inset-0 overflow-auto bg-gray-900 opacity-70 flex justify-center items-center"
            style={{ zIndex: 9999 }}
            onClick={handleClickBackdrop}
          >
            {children}
          </div>
        </Fade>
      </FocusLock>
    </Portal >
  );
};
