import React from 'react';
import { StoryObj } from '@storybook/react';
import { Panel } from '@edgmont-ui/react';
import { CenteredWidget } from '@edgmont-ui/react';

export default {
  title: 'Layout/Centered Widget',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Example: StoryObj<typeof CenteredWidget> = {
  render: () => (
    <CenteredWidget>
      <Panel height="29" p="2">
        123
      </Panel>
    </CenteredWidget>
  ),
};
