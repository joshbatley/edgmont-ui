import { WithChildren } from './index';

export type TabsProps = {
  value?: string | number;
} & WithChildren;


export type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
