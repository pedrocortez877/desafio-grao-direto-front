import 'styled-components';
import { Theme } from '../global/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
