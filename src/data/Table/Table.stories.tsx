import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Table, TableHead, TableBody, TableCell, TableRow } from '.';
import { Pagination } from 'data/Pagination';

export default {
  title: 'Data/Table',
  component: Table,
} as Meta;

let rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Default: Story = ({ ...rest }) => {
  let [skip, setSkip] = useState(0);
  return (
    <Table footer={<Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={48} />}>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} sticky />
      <TableBody>
        {[...rows, ...rows, ...rows].map((m, idx) => (
          <TableRow key={`${m}-${idx}`}>
            <TableCell>Value for row {m} item 1</TableCell>
            <TableCell>Value for row {m} item 2</TableCell>
            <TableCell>Value for row {m} item 3</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

