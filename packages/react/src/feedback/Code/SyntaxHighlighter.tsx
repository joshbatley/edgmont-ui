import { Highlight, Language, themes } from 'prism-react-renderer';
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
  let Theme = light ? themes.github : themes.palenight;
  return (
    <Wrapper style={Theme.plain} skip={!withWrapper}>
      <Highlight theme={Theme} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Wrapper>
  );
};
