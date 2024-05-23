import React from 'react';
import { StoryObj } from '@storybook/react';
import { CodeEditor as CE, SyntaxHighlighter as SH } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Code',
  component: SH,
};

let code = `{
  "text": "text",
  "boolean": true,
  "number": 123,
  "array": [1,2,3],
  "object": {
    "moreText": "moreText"
  }
}`;

export const SyntaxHighlighter: StoryObj<typeof SH> = {
  render: ({ ...rest }) => <SH {...rest} language="js" code={code} />,
};

export const CodeEditor: StoryObj<typeof CE> = {
  render: ({ ...rest }) => <CE {...rest} language="js" code={code} />,
};
