// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-586480973
import { CSSProp } from 'styled-components';
import { TTheme } from '../utils/Theme';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<TTheme>;
    }
  }
}
