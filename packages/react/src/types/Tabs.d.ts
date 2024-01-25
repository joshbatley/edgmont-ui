import { WithChildren } from './index';

export type TabsProps = {
  value?: string | number;
  type?: TabVariant;
} & WithChildren;

export type TabVariant = 'default' | 'card';

export type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
