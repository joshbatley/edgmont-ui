import React from 'react';
import { ClickableElement } from 'inputs/Button/ClickableElement';
import { Scrollable } from 'utils';
import styled from 'styled-components';
import { Box } from 'data';

export type TabCardItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const StyledBtn = styled(ClickableElement)`
  scroll-snap-align: start;
  border-radius: ${({ theme }) => `${theme.radii[2]} ${theme.radii[2]}`} 0 0;
  margin-right: ${({ theme }) => theme.space[1]};
  &:last-of-type {
    margin-right: 0;
  }
  :focus {
    outline: 0;
    box-shadow: none;
  }
`;

export const TabCardItem: React.FC<TabCardItemProps> = ({ children, selected, onClick }) => (
  <StyledBtn px="5" py="3" zIndex="10" position="relative" border="background2.1" borderBottom="0" bg={selected ? 'background.0' : 'background.1'} onClick={onClick}>
    {children}
    {selected && (
      <Box bg="primary" position="absolute" left="0" bottom="0" height="2px" width="100%" />
    )}
  </StyledBtn >
);

export type TabCardItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
};

export const TabCardItems: React.FC<TabCardItemsProps> = ({ tabs, selected, onChange }) => (
  <Scrollable>
    {tabs.map(({ tab, key }) => (
      <TabCardItem
        key={key}
        selected={selected === key}
        onClick={() => onChange(key)}
      >{tab}</TabCardItem>
    ))}
  </Scrollable>
);
