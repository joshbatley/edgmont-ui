import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Pagination } from '.';
import { Box } from 'data/Box';

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
    <Box>
      <Box borderBottomLeftRadius="4" borderBottomRightRadius="4" bg="background.0" px="3" py="2" mb="2" boxShadow="base.0" border="background2.1">
        <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={100} />
      </Box>
      <Box borderBottomLeftRadius="4" borderBottomRightRadius="4" bg="background.0" px="3" py="2" mb="2" boxShadow="base.0" border="background2.1">
        <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={5} />
      </Box>
    </Box>
  );
};

