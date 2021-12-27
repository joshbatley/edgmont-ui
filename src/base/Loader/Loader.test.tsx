import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Loader } from './';

function render(Comp: ReactNode) {
  return testRender(<>{Comp}</>);
}

describe('Loader', () => {
  it('it renders', () => {
    const { container } = render(<Loader />);
    expect(container).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });

  it('accepts height and width', () => {
    const { container } = render(<Loader width={16} height={14} />);
    expect(container.firstChild).toHaveAttribute('height', '14');
    expect(container.firstChild).toHaveAttribute('width', '16');
  });

  it('accepts color value', () => {
    const { container } = render(<Loader color="pink" />);
    expect(container).toMatchSnapshot();
  });
});
