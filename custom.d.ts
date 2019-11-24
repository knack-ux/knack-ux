/* eslint import/export: 0 */
import 'styled-components';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      default: string
      success: string
      warning: string
      danger: string
    },
    focus: string
  }
}
