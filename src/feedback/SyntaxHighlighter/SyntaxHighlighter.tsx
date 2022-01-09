import React from 'react';
import Highligher from 'react-syntax-highlighter';
import { githubGist, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Language } from '.';

export type SyntaxHighlighterProps = {
  code: string;
  language: Language;
  light?: boolean;
  editable?: boolean;
  handleChange?: (text: string) => void;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  language, code, editable, handleChange, light,
}) => {

  function handleTextChange(e: React.KeyboardEvent<HTMLDivElement>) {
    if (editable) {
      handleChange?.(e.currentTarget.textContent || '');
    }
  }

  return (
    <div
      contentEditable={editable}
      onKeyUp={handleTextChange}
      suppressContentEditableWarning={true}
      className="text-sm"
    >
      <Highligher language={language} style={light ? githubGist : atomOneDark} showLineNumbers>
        {code}
      </Highligher>
    </div>
  );
};
