import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Data/Pagination',
  component: Pagination,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Examples: Story = () => {
  let [skip, setSkip] = useState(0);

  return (
    <div className="space-y-2">
      <div className="rounded-b-lg bg-white px-3 py-2 border shadow">
        <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={100} />
      </div>
      <div className="rounded-b-lg bg-white px-3 py-2 border shadow">
        <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={5} />
      </div>
    </div>
  );
};

