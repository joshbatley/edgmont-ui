import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import DarkTheme from 'prism-react-renderer/themes/palenight';
import LightTheme from 'prism-react-renderer/themes/github';
import { Wrapper } from './Wrapper';

export type SyntaxHighlighterProps = {
  code: string;
  language: Language;
  light?: boolean;
  withWrapper?: boolean;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  language, code, light, withWrapper = true,
}) => {
  let Theme = light ? LightTheme : DarkTheme;
  return (
    <Wrapper style={Theme.plain} skip={!withWrapper}>
      <Highlight {...defaultProps} theme={Theme} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => tokens.map((line, i) => (
          <pre>
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          </pre>
        ))}
      </Highlight>
    </Wrapper>

  );
};
