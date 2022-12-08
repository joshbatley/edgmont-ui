import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Text, TextMono } from '.';
import { ThemeDefaultProvider } from 'utils';

function render(component: ReactNode) {
  return testRender(<ThemeDefaultProvider>{component}</ThemeDefaultProvider>);
}

describe('Text component', () => {
  describe('Text', () => {
    it('should render', () => {
      const { container } = render(<Text>Text</Text>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });
  });

  describe('TextMono', () => {
    it('should render', () => {
      const { container } = render(<TextMono>Text</TextMono>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    const { container } = render(<TextMono>Text</TextMono>);
    expect(container).toMatchSnapshot();
  });
});
