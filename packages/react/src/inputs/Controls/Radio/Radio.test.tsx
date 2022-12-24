import React from 'react';
import { render as testRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeDefaultProvider } from 'utils';
import { Radio } from '.';

function render(Comp: any) {
  return testRender(<ThemeDefaultProvider>{Comp}</ThemeDefaultProvider>);
}

const onChangeMock = jest.fn();

describe('Radio test', () => {
  it('should render', () => {
    const { container } = render(<Radio />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
  it('should render with disabled classes', () => {
    const { container } = render(<Radio disabled />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
  it('should errored with disabled classes', () => {
    const { container } = render(<Radio error />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should update value when updated', async () => {
    const { getByRole } = render(<Radio value="testing-value" name="testing-input" onChange={onChangeMock} />);
    expect(onChangeMock).not.toHaveBeenCalled();
    await userEvent.click(getByRole('radio', { hidden: true }));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
