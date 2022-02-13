type TabsProps = {
  value?: string | number;
  type?: TabVarient;
  accentColor?: Colors;
};

type TabVarient = 'default' | 'card';

type Tab = {
  key: string;
  node: React.ReactElement;
} & TabPaneProps;
