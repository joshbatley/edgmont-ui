import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BaseButton } from './BaseButton';

function render(Comp: ReactNode) {
  return testRender(<>{Comp}</>);
}

const onClickMock = jest.fn();

describe('Buttons', () => {
  it('it renders', () => {
    const { container } = render(<BaseButton />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should be disabled', () => {
    const { container } = render(<BaseButton disabled />);
    expect(container.firstChild).toHaveAttribute('disabled');
    expect(container).toMatchSnapshot();
  });

  it('should show loading icon and disabled button', () => {
    const { container } = render(<BaseButton isLoading />);
    expect(container.firstChild).toHaveAttribute('disabled');
    expect(container).toMatchSnapshot();
  });

  it('should accept a size value', () => {
    const { container } = render(<BaseButton size="medium" />);
    expect(container).toMatchSnapshot();
  });

  it('should allow a onClick to be passed and fire the event', () => {
    const { getByRole } = render(<BaseButton onClick={onClickMock}>My button</BaseButton>);
    userEvent.click(getByRole('button', { name: 'My button' }));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
