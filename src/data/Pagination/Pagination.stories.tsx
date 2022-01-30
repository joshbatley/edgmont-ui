import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Data/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story = ({ ...rest }) => {
  let [skip, setSkip] = useState(0);

  return (
    <div className="rounded-b-lg bg-white px-3 py-2 border shadow">
      <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={100} />
    </div>
  );
};

