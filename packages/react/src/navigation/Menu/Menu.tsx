import { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { ClickOutside } from '../../utils';
import { Box } from '../../data';
import { WithChildren } from '../../types';

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
      <Box bg="background" borderRadius="3" boxShadow="base.0" border="border.1" display="flex" flexDirection="column" py="1" overflowY="scroll" {...rest}>
        {children}
      </Box>
    </ClickOutside>
  ) : null;
};
