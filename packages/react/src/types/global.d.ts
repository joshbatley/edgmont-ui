// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-586480973
import { CSSProp } from 'styled-components'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { TTheme } from '../src/theme'; // eslint-disable-line @typescript-eslint/no-unused-vars

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<TTheme>;
    }
  }
}
