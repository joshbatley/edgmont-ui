import React from 'react';
import { render as testRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '.';

function render(Comp: any) {
  return testRender(Comp);
}

const onChangeMock = jest.fn();

describe('Checkbox test', () => {
  it('should render', () => {
    const { container } = render(<Checkbox />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
  it('should render with disabled classes', () => {
    const { container } = render(<Checkbox disabled />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
  it('should errored with disabled classes', () => {
    const { container } = render(<Checkbox error />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should update value when updated', () => {
    const { getByRole } = render(<Checkbox value="testing-value" name="testing-input" onChange={onChangeMock} />);
    expect(onChangeMock).not.toHaveBeenCalled();
    userEvent.click(getByRole('checkbox'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
