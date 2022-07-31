type TabsProps = {
  value?: string | number;
  type?: TabVarient;
  color?: Colors;
} & WithChildren;

type TabVarient = 'default' | 'card';

type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
