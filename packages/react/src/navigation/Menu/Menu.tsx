import React, { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { ClickOutside } from 'utils';
import { Box } from 'data';

export type MenuProps = {
  direction?: Placement;
  isOpen?: boolean;
  itemRef: Element | null;
  handleClose: () => void;
  inline?: boolean;
} & WithChildren;

export const Menu: React.FC<MenuProps> = ({ children, isOpen, direction = 'bottom-start', itemRef, handleClose, inline = false, ...rest }) => {
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

  let Popper = <div ref={setPopperRef as Ref<HTMLDivElement>} style={styles.popper} {...attributes.popper} />;

  return isOpen ? (
    <ClickOutside handleClose={handleClose} target={popperRef} wrapper={Popper} inline={inline}>
      <Box bg="background.1" borderRadius={2} boxShadow="base.2" display="flex" flexDirection="column" overflowY="scroll" {...rest}>
        {children}
      </Box>
    </ClickOutside>
  ) : null;
};
