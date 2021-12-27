import React from 'react';
import { render as testRender } from '@testing-library/react';
import { TextField } from '.';
import { LockClosedIcon } from 'base/Icons/Outline';

function render(Comp: any) {
  return testRender(Comp);
}

describe('TextField test', () => {
  it('should render', () => {
    const { container } = render(<TextField />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('should render the Prefix Icon', () => {
    const { getByTestId } = render(<TextField prefixIcon={<LockClosedIcon data-testid="testingPrefix" />} />);
    expect(getByTestId('testingPrefix')).toBeInTheDocument();
  });
  it('should render the Suffix Icon', () => {
    const { getByTestId } = render(<TextField suffixIcon={<LockClosedIcon data-testid="testingSuffix" />} />);
    expect(getByTestId('testingSuffix')).toBeInTheDocument();
  });
});
