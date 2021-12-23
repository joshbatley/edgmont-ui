import { Text } from 'atoms';
import React from 'react';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...args }) => (
  <Text as="li" {...args}>{children}</Text>
);
