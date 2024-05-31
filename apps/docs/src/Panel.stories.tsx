import { StoryObj } from '@storybook/react';
import { Panel } from '@edgmont-ui/react';

export default {
  title: 'Data/Panel',
  component: Panel,
  args: {
    children: 'My basic panel',
  },
};

export const Showcase: StoryObj<typeof Panel> = {
  render: ({ children, ...rest }) => (
    <Panel px="3" py="2" {...rest}>
      {children}
    </Panel>
  ),
};
