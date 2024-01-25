import { render as testRender } from '@testing-library/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { ThemeDefaultProvider } from '../../utils';
import { TextField } from '.';

function render(Comp: any) {
  return testRender(<ThemeDefaultProvider>{Comp}</ThemeDefaultProvider>);
}

describe('TextField test', () => {
  it('should render', () => {
    const { container } = render(<TextField />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should render the Prefix Icon', () => {
    const { getByTestId } = render(<TextField prefiXMarkIcon={<LockClosedIcon data-testid="testingPrefix" />} />);
    expect(getByTestId('testingPrefix')).toBeInTheDocument();
  });
  it('should render the Suffix Icon', () => {
    const { getByTestId } = render(<TextField suffiXMarkIcon={<LockClosedIcon data-testid="testingSuffix" />} />);
    expect(getByTestId('testingSuffix')).toBeInTheDocument();
  });
});
