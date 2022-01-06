import React, { useCallback, useEffect, useState } from 'react';
import { Portal } from 'base';
import { Fade } from 'base/Transitions';
import FocusLock from 'react-focus-lock';

export const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

export const Backdrop: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
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
        <Fade inProp={open} onDestroyed={onClick}>
          <div
            className="w-screen h-full fixed inset-0 overflow-auto bg-gray-900 opacity-70 flex justify-center items-center"
            style={{ zIndex: 9999 }}
            onClick={handleClickBackdrop}
            {...rest}
          >
            {children}
          </div>
        </Fade>
      </FocusLock>
    </Portal>
  );
};
