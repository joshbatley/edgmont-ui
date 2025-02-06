import { StoryObj } from '@storybook/react';
import { ThemeSwitch, ThemeButton, OutlineButton, Box } from '@edgmont-ui/react';

export default {
  title: 'Utils/Theme Toggle',
  component: ThemeSwitch,
};

export const Switch: StoryObj<typeof ThemeSwitch> = {
  render: ({ children, ...rest }: any) => <ThemeSwitch />,
};

export const Button: StoryObj<typeof ThemeButton> = {
  render: ({ children, ...rest }: any) => <Box display="flex" spaceXBetween="2">
    <ThemeButton />
    <OutlineButton>Profile</OutlineButton>
  </Box>,
};

