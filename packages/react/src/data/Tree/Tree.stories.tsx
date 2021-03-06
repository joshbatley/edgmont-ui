import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from 'data';
import { Tree, TreeItem } from '.';
import { BellIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

export default {
  title: 'Data/Tree',
  component: Tree,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Example: Story = () => (
  <>
    <Panel className="px-2 py-3 w-1/2">
      <Tree defaultExpanded={['1', '1.2']} blockNode>
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

export const CustomIcons: Story = () => (
  <Panel className="px-2 py-3 w-1/2">
    <Tree
      defaultExpanded={['1']}
      defaultCollapseIcon={<ShoppingBagIcon width={16} height={16} />}
      defaultEndIcon={<BellIcon width={16} height={16} />}
      defaultExpandIcon={<StarIcon width={16} height={16} />}
    >
      <TreeItem label="Item 1" nodeId="1" >
        <TreeItem label="Item 2" nodeId="2">
          <TreeItem label="Item 4" nodeId="4" />
        </TreeItem>
      </TreeItem>
      <TreeItem label="Item 3" nodeId="3" />
    </Tree>
  </Panel>
);
