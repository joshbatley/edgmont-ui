import { Box, BoxProps } from '../../data';
import { Tab } from '../../types/Tabs';

export type TabPaneProps = {
  selected?: boolean;
  value?: string;
  tab?: React.ReactNode;
  children?: React.ReactNode;
  key: string | number;
} & React.ComponentPropsWithoutRef<'div'> & BoxProps;

export type TabPaneListProps = {
  tabs: Tab[];
  selected: string | number;
};

export const TabPane: React.FC<TabPaneProps> = ({ children, selected, ...rest }) =>
  selected ? <Box px="4" py="5" {...rest}>{children}</Box> : null;

export const TabPaneList: React.FC<TabPaneListProps> = ({ tabs, selected }) => {
  return (
    <Box>
      {tabs.map(({ key, children, ...rest }) => (
        <TabPane
          selected={selected === key}
          key={key} {...rest}
        >{children}</TabPane>
      ))}
    </Box>
  );
};
