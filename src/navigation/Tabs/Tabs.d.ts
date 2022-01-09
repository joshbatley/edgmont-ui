import { TabPaneProps } from './';

type TabVarient = 'default' | 'card';

export type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
