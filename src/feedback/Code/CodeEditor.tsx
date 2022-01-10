import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Language } from 'prism-react-renderer';
import DarkTheme from 'prism-react-renderer/themes/palenight';
import LightTheme from 'prism-react-renderer/themes/github';
import { Wrapper } from './Wrapper';
import { SyntaxHighlighter } from '.';


export type CodeEditorProps = {
  code: string;
  language: Language;
  light?: boolean;
  handleChange?: (text: string) => void;
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language, code, handleChange, light,
}) => {
  let [state, setState] = useState(code);
  let Theme = light ? LightTheme : DarkTheme;
  function handleTextChange(text: string) {
    console.log(text);
    setState(text);
    handleChange?.(text);
  }

  return (
    <Wrapper style={Theme.plain}>
      <Editor
        highlight={c => (<SyntaxHighlighter code={c} language={language} withWrapper={false} light={light} />)}
        value={state}
        onValueChange={handleTextChange}
      />
    </Wrapper>
  );
};

