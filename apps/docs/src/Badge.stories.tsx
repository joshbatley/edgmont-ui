import { StoryObj, Meta } from '@storybook/react';
import { UserIcon } from '@heroicons/react/24/solid';
import { Badge } from '@edgmont-ui/react';
import { Box } from '@edgmont-ui/react';
import { colorSelect, intercardinalPointsSelect } from './presets';

const meta: Meta = {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    tag: '100+',
  },
  argTypes: {
    position: intercardinalPointsSelect,
    color: colorSelect,
  },
};
export default meta;

export const Examples: StoryObj<typeof Badge> = {
  render: ({ ...rest }: any) => (
    <Box width="50%" mt="10" mx="auto">
      <Box mt="4" display="grid" justifyItems="start" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
        <Badge position="NW" {...rest}>
          <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="NE" {...rest}>
          <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
      </Box>
      <Box mt="4" display="grid" justifyItems="start" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
        <Badge position="SW" {...rest}>
          <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
        <Badge position="SE" {...rest}>
          <Box p="2" borderRadius="4" border="background2.1" bg="background.0">
            <UserIcon width={20} height={20} />
          </Box>
        </Badge>
      </Box>
    </Box>
  ),
};
