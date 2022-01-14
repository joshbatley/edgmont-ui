import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Box } from '.';

function render(component: ReactNode) {
  return testRender(<>{component}</>);
}

describe('Box component', () => {
  it('should render', () => {
    const { container } = render(<Box>My Box</Box>);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(container.firstChild).toHaveTextContent('My Box');
  });

  it('should match snapshots', () => {
    const { container } = render(<Box><h1>Children</h1></Box>);
    expect(container).toMatchSnapshot();
  });
});
