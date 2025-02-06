import { render as testRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EdgmontUI } from '../../../utils';
import { Checkbox } from '.';

function render(Comp: any) {
  return testRender(<EdgmontUI>{Comp}</EdgmontUI>);
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

  it('should update value when updated', async () => {
    const { getByRole } = render(<Checkbox value="testing-value" name="testing-input" onChange={onChangeMock} />);
    expect(onChangeMock).not.toHaveBeenCalled();
    await userEvent.click(getByRole('checkbox', { hidden: true }));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
