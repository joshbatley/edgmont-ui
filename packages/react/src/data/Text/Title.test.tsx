import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Title } from '.';
import { ThemeDefaultProvider } from '../../utils';

function render(component: ReactNode) {
  return testRender(<ThemeDefaultProvider>{component}</ThemeDefaultProvider>);
}


describe('Title component', () => {
  it('should render', () => {
    const { container } = render(<Title>Title</Title>);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(container.firstChild).toHaveTextContent('Title');
  });
});
