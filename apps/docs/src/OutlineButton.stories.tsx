import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { CircleLoader, OutlineButton } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
};

export const Showcase: StoryObj<typeof OutlineButton> = {
  render: ({ children, ...rest }) => (
    <>
      <OutlineButton {...rest}>{children}</OutlineButton>
      <br /><br />
      <OutlineButton disabled {...rest}>{children}</OutlineButton>
      <br /><br />
      <OutlineButton {...rest}>
        <ArrowDownOnSquareIcon width={16} height={16} />
        <span>{children}</span>
      </OutlineButton>
      <br /><br />
      <OutlineButton disabled {...rest}>
        <CircleLoader width={16} height={16} />
        <span>{children}</span>
      </OutlineButton>
    </>
  ),
};
