import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SyntaxHighlighter, CodeEditor } from './';

export default {
  title: 'Feedback/Syntax Highlighter',
  component: SyntaxHighlighter,
} as Meta;

let code = `{
  "text": "text",
  "boolean": true,
  "number": 123,
  "array": [1,2,3],
  "object": {
    "moreText": "moreText"
  }
}`;

export const Default: Story = ({ ...rest }) => (
  <SyntaxHighlighter
    language="json"
    code={code}
    {...rest}
  />
);

export const AsCodeEditor: Story = ({ ...rest }) => (
  <CodeEditor
    language="json"
    code={code}
    {...rest}
  />
);
