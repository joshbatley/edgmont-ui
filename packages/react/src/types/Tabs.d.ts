type TabsProps = {
  value?: string | number;
  type?: TabVarient;
  color?: ColorsLegacy;
} & WithChildren;

type TabVarient = 'default' | 'card';

type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
