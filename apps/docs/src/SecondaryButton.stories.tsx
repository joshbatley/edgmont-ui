import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { CircleLoader, SecondaryButton } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
};

export const Showcase: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <>
      <SecondaryButton  {...rest}>{children}</SecondaryButton>
      <br /><br />
      <SecondaryButton disabled {...rest}>{children}</SecondaryButton>
      <br /><br />
      <SecondaryButton {...rest}>
        <ArrowDownOnSquareIcon width={16} height={16} />
        <span>{children}</span>
      </SecondaryButton>
      <br /><br />
      <SecondaryButton disabled {...rest}>
        <CircleLoader width={16} height={16} />
        <span>{children}</span>
      </SecondaryButton>
    </>
  ),
};
