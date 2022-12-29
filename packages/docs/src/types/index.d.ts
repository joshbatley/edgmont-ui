// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-586480973
import { CSSProp } from 'styled-components'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { TTheme } from '@edgmont-ui/react';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<TTheme>;
    }
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TTheme { }
}
