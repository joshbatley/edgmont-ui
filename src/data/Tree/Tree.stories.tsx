import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Tree, TreeItem } from '.';
import { Panel } from 'base';

export default {
  title: 'Data/Tree',
  component: Tree,
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <>
    <Panel className="px-2 py-3 w-1/2">
      <Tree defaultExpanded={['1', '1.2']} blockNode >
        <TreeItem nodeId="1" label="item 1" active>
          <TreeItem nodeId="1.1" label="item 1.1" />
          <TreeItem disabled nodeId="1.2" label="item 1.2">
            <TreeItem nodeId="1.2.1" label="item 1.2.1">
              <TreeItem nodeId="1.2.1.1" label="item 1.2.1.1" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="2" label="item 2" />
        <TreeItem nodeId="3" label="item 3" />
      </Tree>
    </Panel>

    <Panel className="mt-4 px-2 py-3 w-1/2">
      <Tree defaultExpanded={['1', '1.2']} >
        <TreeItem nodeId="1" label="item 1" active>
          <TreeItem nodeId="1.1" label="item 1.1" />
          <TreeItem disabled nodeId="1.2" label="item 1.2">
            <TreeItem nodeId="1.2.1" label="item 1.2.1">
              <TreeItem nodeId="1.2.1.1" label="item 1.2.1.1" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="2" label="item 2" />
        <TreeItem nodeId="3" label="item 3" />
      </Tree>
    </Panel>
  </>
);

