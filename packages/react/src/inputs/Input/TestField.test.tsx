import { render as testRender } from '@testing-library/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { ThemeDefaultProvider } from '../../utils';
import { Input } from '.';

function render(Comp: any) {
  return testRender(<ThemeDefaultProvider>{Comp}</ThemeDefaultProvider>);
}

describe('Input test', () => {
  it('should render', () => {
    const { container } = render(<Input />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should render the Prefix Icon', () => {
    const { getByTestId } = render(<Input prefiXMarkIcon={<LockClosedIcon data-testid="testingPrefix" />} />);
    expect(getByTestId('testingPrefix')).toBeInTheDocument();
  });
  it('should render the Suffix Icon', () => {
    const { getByTestId } = render(<Input suffiXMarkIcon={<LockClosedIcon data-testid="testingSuffix" />} />);
    expect(getByTestId('testingSuffix')).toBeInTheDocument();
  });
});
