import React, { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { ClickOutside } from 'utils/ClickOutside';

export type MenuProps = {
  direction?: Placement;
  isOpen?: boolean;
  itemRef: Element | null;
  handleClose: () => void;
  maxHeight?: number;
  inline?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ children, isOpen, direction = 'bottom-start', itemRef, handleClose, maxHeight, inline = false }) => {
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
      <div className={`bg-white rounded-sm shadow-md flex flex-col overflow-y-scroll max-h-[${maxHeight}px]`}>
        {children}
      </div>
    </ClickOutside>
  ) : null;
};
