import React, { useState } from 'react';
import { Backdrop, stopPropagation, Open } from 'utils';
import styled from 'styled-components';

export type DrawerProps = {
  open?: boolean;
  direction?: 'left' | 'right';
  handleClose: () => void;
} & WithChildren;

const StyledOpen = styled(Open) <{ direction: 'left' | 'right' }>`
  position: fixed;
  width: 33.333333%;
  height: 100vh;
  top: 0px;
  ${({ direction }) => direction === 'left' ? 'left: 0px;' : 'right: 0;'}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background[0]};
`;

export const Drawer: React.FC<DrawerProps> = ({
  open, handleClose, direction = 'right', children,
}) => {
  let [isOpen, setOpen] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <Backdrop config={{ duration: 195 }} onClick={() => setOpen(!isOpen)} onDestroyed={handleClose}>
      <StyledOpen inProp={isOpen} direction={direction} >
        <Container onClick={stopPropagation}>
          {children}
        </Container>
      </StyledOpen>
    </Backdrop >
  );
};
