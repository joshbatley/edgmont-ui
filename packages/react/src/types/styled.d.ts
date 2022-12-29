import 'styled-components';

import { TTheme } from '../utils/Theme';

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TTheme { }
}
