import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SyntaxHighlighter as SH, CodeEditor as CE } from '.';

export default {
  title: 'Feedback/Code',
  component: SH,
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

export const SyntaxHighlighter: Story = ({ ...rest }) => (
  <SH
    language="json"
    code={code}
    {...rest}
  />
);

export const CodeEditor: Story = ({ ...rest }) => (
  <CE
    language="json"
    code={code}
    {...rest}
  />
);
