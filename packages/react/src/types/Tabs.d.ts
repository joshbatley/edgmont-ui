type TabsProps = {
  value?: string | number;
  type?: TabVarient;
} & WithChildren;

type TabVarient = 'default' | 'card';

type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
