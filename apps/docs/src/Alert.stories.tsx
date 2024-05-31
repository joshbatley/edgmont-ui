import { StoryObj } from '@storybook/react';
import { SunIcon } from '@heroicons/react/24/solid';
import { Alert } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Alert title',
  },
};


export const Showcase: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <>
      <Alert {...rest} />
      <br />
      <Alert destructive {...rest} />
    </>
  ),
};

export const WithIcon: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <>
      <Alert icon={<SunIcon height={22} width={22} />} {...rest} />
      <br />
      <Alert destructive icon={<SunIcon height={22} width={22} />} {...rest} />
    </>
  ),
};

export const WithMessage: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <>
      <Alert {...rest}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, mauris.
      </Alert>
      <br />
      <Alert destructive {...rest}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, mauris.
      </Alert>
    </>
  ),
};

export const WithDelete: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <>
      <Alert {...rest} withClose={() => alert('delete')} />
      <br />
      <Alert destructive {...rest} withClose={() => alert('delete')} />
    </>
  ),
};

