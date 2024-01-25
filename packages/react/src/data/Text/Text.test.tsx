import { ReactNode } from 'react';
import { render as testRender } from '@testing-library/react';
import { ThemeDefaultProvider } from '../../utils';
import { TextComp } from '.';

function render(component: ReactNode) {
  return testRender(<ThemeDefaultProvider>{component}</ThemeDefaultProvider>);
}

describe('Text component', () => {
  describe('Text', () => {
    it('should render', () => {
      const { container } = render(<TextComp>Text</TextComp>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });
  });

  describe('TextMono', () => {
    it('should render', () => {
      const { container } = render(<TextComp mono>Text</TextComp>);
      expect(container.firstChild).not.toBeEmptyDOMElement();
      expect(container.firstChild).toHaveTextContent('Text');
    });

    const { container } = render(<TextComp mono>Text</TextComp>);
    expect(container).toMatchSnapshot();
  });
});
