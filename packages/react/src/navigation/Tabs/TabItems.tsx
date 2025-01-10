import styled from 'styled-components';
import { ClickableElement } from '../../inputs';
import { Box } from '../../data';
import { Tab } from '../../types/Tabs';

export type TabItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const StyledBtn = styled(ClickableElement)`
  scroll-snap-align: start;
  border-radius: ${({ theme }) => theme.radii[2]};
  margin-right: ${({ theme }) => theme.space[1]};
  &:last-of-type {
    margin-right: 0;
  }
  :focus {
    outline: 0;
  }
`;

export const TabItem: React.FC<TabItemProps> = ({ children, selected, onClick }) => (
  <StyledBtn
    px="3"
    py="1"
    position="relative"
    boxShadow={selected ? 'base.1' : 'none'}
    bg={selected ? 'background' : 'transparent'}
    color={selected ? 'foreground' : 'mutedForeground'}
    onClick={onClick}>
    {children}
  </StyledBtn >
);

export type TabItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
};

export const TabItems: React.FC<TabItemsProps> = ({ tabs, selected, onChange }) => (
  <Box bg="muted" borderRadius={4} px="1" py="1" display="inline-flex" border="muted.1">
    {tabs.map(({ tab, key }) => (
      <TabItem
        key={key}
        selected={selected === key}
        onClick={() => onChange(key)}
      >{tab}</TabItem>
    ))}
  </Box>
);
