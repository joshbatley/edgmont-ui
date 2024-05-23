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
  let theme = !light ? themes.vsLight : themes.vsDark;
  return (
    <Wrapper style={theme.plain} skip={!withWrapper}>
      <Highlight
        theme={theme}
        code={code}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Wrapper>
  );
};
