import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Button, CircleLoader } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Button',
  component: Button,
  args: {
    children: 'Get started',
  },
};
export const Showcase: StoryObj<typeof Button> = {
  render: ({ children, ...rest }) => (
    <>
      <Button  {...rest}>{children}</Button>
      <br /><br />
      <Button active {...rest}>{children}</Button>
      <br /><br />
      <Button disabled {...rest}>{children}</Button>
      <br /><br />
      <Button {...rest}>
        <ArrowDownOnSquareIcon width={16} height={16} />
        <span>{children}</span>
      </Button>
      <br /><br />
      <Button active disabled {...rest}>
        <CircleLoader width={16} height={16} />
        <span>{children}</span>
      </Button>
    </>
  ),
};
