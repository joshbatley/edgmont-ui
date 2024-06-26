import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Pagination } from '@edgmont-ui/react';

export default {
  title: 'Data/Pagination',
  component: Pagination,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof Pagination> = {
  render: () => {
    let [skip, setSkip] = useState(0);

    return (
      <Box>
        <Box
          borderBottomLeftRadius="4"
          borderBottomRightRadius="4"
          bg="background.1"
          px="3"
          py="2"
          mb="2"
          border="border.1"
        >
          <Pagination
            limit={10}
            skip={skip}
            setSkip={setSkip}
            itemCount={100}
          />
        </Box>
        <Box
          borderBottomLeftRadius="4"
          borderBottomRightRadius="4"
          bg="background.1"
          px="3"
          py="2"
          mb="2"
          border="border.1"
        >
          <Pagination limit={10} skip={skip} setSkip={setSkip} itemCount={5} />
        </Box>
      </Box>
    );
  },
};
