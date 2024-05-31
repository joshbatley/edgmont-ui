import { StoryObj } from '@storybook/react';
import { Box, UploadButton as UB, UploadZone as UZ } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Upload',
  component: UZ,
};

export const UploadZone: StoryObj<typeof UZ> = {
  render: ({ ...rest }) => (
    <Box px="3" py="2" width="50%">
      <UZ {...rest} />
    </Box>
  ),
};

export const UploadButton: StoryObj<typeof UB> = {
  render: ({ ...rest }) => <UB {...rest} />,
};
