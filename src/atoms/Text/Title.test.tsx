import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Title } from './';

function render(component: ReactNode) {
  return testRender(<>{component}</>);
}

describe('Title component', () => {
  it('should render', () => {
    const { container } = render(<Title>Title</Title>);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(container.firstChild).toHaveTextContent('Title');
  });

  it.each([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  ])('headings match snapshots', (as: any) => {
    const { container } = render(<Title as={as}>Title</Title>);
    expect(container).toMatchSnapshot();
  });
});
