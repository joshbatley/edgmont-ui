import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Box } from './';

function render(component: ReactNode) {
  return testRender(<>{component}</>);
}

describe('Box component', () => {
  it('should render', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).not.toBeEmptyDOMElement();
  });
});
