import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Language, themes } from 'prism-react-renderer';
import { Wrapper } from './Wrapper';
import { SyntaxHighlighter } from './SyntaxHighlighter';

export type CodeEditorProps = {
  code: string;
  language: Language;
  light?: boolean;
  handleChange?: (text: string) => void;
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language, code, handleChange, light = false,
}) => {
  let [state, setState] = useState(code);
  let theme = light ? themes.vsLight : themes.vsDark;
  let handleTextChange = (text: string) => {
    setState(text);
    handleChange?.(text);
  };

  return (
    <Wrapper style={theme.plain}>
      <Editor
        highlight={c => (<SyntaxHighlighter code={c} language={language} withWrapper={false} light={light} />)}
        value={state}
        onValueChange={handleTextChange}
      />
    </Wrapper>
  );
};
