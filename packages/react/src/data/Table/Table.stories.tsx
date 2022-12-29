import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box, Pagination, Text } from '../../data';
import { Table, TableHead, TableBody, TableCell, TableRow } from '.';

export default {
  title: 'Data/Table',
  component: Table,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

const arrayRange = (from: number, to: number) =>
  Array.from(Array(Math.max(0, to - from + 1)), (_, idx) => idx + from);
const allRows = arrayRange(0, 40);

export const Example: Story = () => {
  const limit = 10;
  let [skip, setSkip] = useState(0);
  let [rows, setRows] = useState<number[]>([]);

  useEffect(() => {
    if (skip + limit < allRows.length) {
      setRows(allRows.slice(skip, skip + limit));
    } else {
      setRows(allRows.slice(allRows.length - limit, allRows.length));
    }
  }, [skip]);

  return (
    <Table footer={<Pagination limit={limit} skip={skip} setSkip={setSkip} itemCount={allRows.length} />}>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
      <TableBody>
        {rows.map((m, idx) => (
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

export const Interactable: Story = () => {
  let limit = 10;
  let [active, setActive] = useState<number | undefined>();
  let [skip, setSkip] = useState(0);
  let [rows, setRows] = useState<number[]>([]);

  useEffect(() => {
    if (skip + limit < allRows.length) {
      setRows(allRows.slice(skip, skip + limit));
    } else {
      setRows(allRows.slice(allRows.length - limit, allRows.length));
    }
  }, [skip, limit]);

  const interactive = (i: number) => {
    alert(`Setting row ${i} as active`);
    setActive(i);
  };

  return (
    <Table footer={<Pagination limit={limit} skip={skip} setSkip={setSkip} itemCount={allRows.length} />}>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
      <TableBody>
        {rows.map((m, idx) => (
          <TableRow key={`${m}-${idx}`} onClick={() => interactive(idx)} active={idx === active}>
            <TableCell>Value for row {m} item 1</TableCell>
            <TableCell>Value for row {m} item 2</TableCell>
            <TableCell>Value for row {m} item 3</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const TableProps: Story = () => (
  <Box>
    <Box mb="2">
      <Table>
        <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
        <TableBody>
          <TableRow>
            <TableCell>Value for row 1 item 1</TableCell>
            <TableCell>Value for row 2 item 2</TableCell>
            <TableCell>Value for row 3s item 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    <Table footer={<Text textAlign="center" color="primary" fontWeight="700">You can add any footer prop, like a Pagination</Text>}>
      <TableHead headers={['Header 1', 'Header 2', 'Header 3']} />
      <TableBody>
        <TableRow>
          <TableCell>Value for row 1 item 1</TableCell>
          <TableCell>Value for row 2 item 2</TableCell>
          <TableCell>Value for row 3s item 3</TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </Box>
);

export const TableHeadProps: Story = ({ ...rest }) => {
  let headers: string[] = rest.headers.split(',');
  return (
    <div>
      <Box mb="3">
        Headers as pro
        <Table>
          <TableHead headers={headers} />
        </Table>
      </Box>

      <Box mb="3">
        As Custom headers
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((i) =>
                <th key={i}>{i}</th>,
              )}
            </TableRow>
          </TableHead>
        </Table>
      </Box>

      <Box mb="3">
        Sticky Header
        <Table>
          <TableHead headers={['Header 1', 'Header 2', 'Header 3']} sticky />
          <TableBody>
            {allRows.map((m, idx) => (
              <TableRow key={`${m}-${idx}`}>
                <TableCell>Value for row {m} item 1</TableCell>
                <TableCell>Value for row {m} item 2</TableCell>
                <TableCell>Value for row {m} item 3</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};
TableHeadProps.args = {
  headers: 'Header1,header2,header3',
};
