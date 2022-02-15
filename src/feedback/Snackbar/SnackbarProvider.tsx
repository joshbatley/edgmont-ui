import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Portal } from 'utils';
import { SnackbarProviderProps, Snack, SnackOptions } from 'types/Snackbar';
import { SnackbarContext, SnackbarItem } from '.';
import { createId, getPosition } from './utils';

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
        <div className={classNames('fixed flex z-50 my-1.5', getPosition(anchor))}>
          {items.map(({ id, duration, ...rest }) => (
            <SnackbarItem
              key={id}
              duration={duration || autoHideDuration}
              handleClose={() => dequeue(id as string)}
              {...rest}
            />
          ))}
        </div>
      </Portal>
      {children}
    </SnackbarContext.Provider >
  );
};
