import React, { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { Text, TextMono } from './';

function render(component: ReactNode) {
  return testRender(<>{component}</>);
}

describe('Text component', () => {
  describe('Text', () => {
    it('should render', () => {
      const { container } = render(<Text>Text</Text>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    it('should match snapshots', () => {
      const { container } = render(<Text>Text</Text>);
      expect(container).toMatchSnapshot();
    });

    it('should default to <p> html tag', () => {
      const { container } = render(<Text>Text</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should updated to span html tag', () => {
      const { container } = render(<Text as="span">Text</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('TextMono', () => {
    it('should render', () => {
      const { container } = render(<TextMono>Text</TextMono>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    it('should match snapshots', () => {
      const { container } = render(<TextMono>Text</TextMono>);
      expect(container).toMatchSnapshot();
    });
  });
});
