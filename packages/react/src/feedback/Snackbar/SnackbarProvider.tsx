import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Portal } from '../../utils';
import { SnackbarProviderProps, Snack, SnackOptions } from '../../types/Snackbar';
import { SnackbarContext } from './SnackbarContext';
import { SnackbarItem } from './SnackbarItem';
import { createId, getPosition } from './utils';
import {IntercardinalPoints} from "../../types";

const Container = styled.div<{ anchor: IntercardinalPoints }>`
  position: fixed;
  display: flex;
  z-index: 50;
  margin-bottom: ${({ theme }) => theme.space[1]};
  margin-top: ${({ theme }) => theme.space[1]};
  ${({ anchor }) => getPosition(anchor)}
`;

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  anchor = 'NE', children, max = 3, autoHideDuration = 5000, portalLocation,
}) => {
  let [items, setItems] = useState<Snack[]>([]);
  let [queue, setQueue] = useState<Snack[]>([]);

  useEffect(() => {
    if (queue.length <= 0) {
      return;
    }
    if (items.length < max) {
      let temp = queue;
      let item = temp.shift() as Snack;
      setItems([...items, item]);
      setQueue(temp);
    }
  }, [items, queue, max]);

  let enqueue = (message: string, options?: SnackOptions) => {
    let item = {
      title: message,
      ...options,
      id: options?.id || createId(),
    };
    if (items.length < max) {
      setItems([...items, item]);
    } else {
      setQueue([...queue, item]);
    }
  };

  let dequeue = (id: string) => {
    setItems([...items.filter(i => i.id !== id)]);
    setQueue([...queue.filter(i => i.id !== id)]);
  };

  let clearAll = () => {
    setItems([]);
    setQueue([]);
  };

  return (
    <SnackbarContext.Provider value={{
      enqueue,
      dequeue,
      clearAll,
    }}>
      <Portal element={portalLocation}>
        <Container anchor={anchor}>
          {items.map(({ id, duration, ...rest }) => (
            <SnackbarItem
              key={id}
              duration={duration || autoHideDuration}
              handleClose={() => dequeue(id as string)}
              {...rest}
            />
          ))}
        </Container>
      </Portal>
      {children}
    </SnackbarContext.Provider >
  );
};
