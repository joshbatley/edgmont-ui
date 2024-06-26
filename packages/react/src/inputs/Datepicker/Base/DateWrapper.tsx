import { Ref, useState } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { ClickOutside } from '../../../utils';
import { WithChildren } from '../../../types';
import { Box } from '../../../data';

export type DateWrapperProps = {
  direction?: Placement;
  isOpen?: boolean;
  itemRef: Element | null;
  handleClose: () => void;
} & WithChildren;

export const DateWrapper: React.FC<DateWrapperProps> = ({ children, itemRef, direction = 'bottom-start', handleClose, isOpen }) => {
  let [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(itemRef, popperRef, {
    placement: direction,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return isOpen ? (
    <ClickOutside handleClose={handleClose} target={popperRef}>
      <Box ref={setPopperRef as Ref<HTMLDivElement>} style={styles.popper} {...attributes.popper}>
        {children}
      </Box>
    </ClickOutside>
  ) : null;
};
