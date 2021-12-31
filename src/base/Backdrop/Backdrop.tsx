import React, { useCallback, useEffect } from 'react';
import { Portal } from 'base';

export const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

export const Backdrop: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, onClick, ...rest }) => {

  const handleClickBackdrop = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onClick?.(e as any);
    },
    [onClick],
  );

  const closeModalOnESC = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClick?.(e as any);
      }
    },
    [onClick],
  );

  useEffect(() => {
    window.addEventListener('keyup', closeModalOnESC);

    return () => {
      window.removeEventListener('keyup', closeModalOnESC);
    };
  }, [closeModalOnESC]);

  return (
    <Portal>
      <div
        className="w-screen h-screen fixed inset-0 overflow-auto bg-gray-900 opacity-70 flex justify-center items-center"
        style={{ zIndex: 9999 }}
        onClick={handleClickBackdrop}
        {...rest}
      >
        {children}
      </div>
    </Portal>
  );
};
