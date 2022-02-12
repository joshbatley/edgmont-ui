import type { TabPaneProps } from 'navigation';

type TabVarient = 'default' | 'card';

type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
