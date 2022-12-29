import React from 'react';
import { Text } from '../../data/Text';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
