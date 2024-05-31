import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { CircleLoader, PrimaryButton } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
};

export const Showcase: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <>
      <PrimaryButton  {...rest}>{children}</PrimaryButton>
      <br /><br />
      <PrimaryButton disabled {...rest}>{children}</PrimaryButton>
      <br /><br />
      <PrimaryButton {...rest}>
        <ArrowDownOnSquareIcon width={16} height={16} />
        <span>{children}</span>
      </PrimaryButton>
      <br /><br />
      <PrimaryButton disabled {...rest}>
        <CircleLoader width={16} height={16} />
        <span>{children}</span>
      </PrimaryButton>
    </>
  ),
};
