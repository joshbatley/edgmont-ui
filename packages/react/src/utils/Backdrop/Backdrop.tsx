import { useCallback, useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Box } from '../../data/Box';
import { Fade, FadeProps } from '../Transitions';
import { Portal } from '../Portal';

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
          <Box
            width="100vw"
            height="100%"
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            overflow="auto"
            bg="rgba(0, 0, 0, .8)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="9999"
            onClick={handleClickBackdrop}
          >
            {children}
          </Box>
        </Fade>
      </FocusLock>
    </Portal>
  );
};
