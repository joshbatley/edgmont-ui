import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { CircleLoader, DestructiveButton } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Destructive',
  component: DestructiveButton,
  args: {
    children: 'Get started',
  },
};

export const Showcase: StoryObj<typeof DestructiveButton> = {
  render: ({ children, ...rest }) => (
    <>
      <DestructiveButton  {...rest}>{children}</DestructiveButton>
      <br /><br />
      <DestructiveButton disabled {...rest}>{children}</DestructiveButton>
      <br /><br />
      <DestructiveButton {...rest}>
        <ArrowDownOnSquareIcon width={16} height={16} />
        <span>{children}</span>
      </DestructiveButton>
      <br /><br />
      <DestructiveButton disabled {...rest}>
        <CircleLoader width={16} height={16} />
        <span>{children}</span>
      </DestructiveButton>
    </>
  ),
};

