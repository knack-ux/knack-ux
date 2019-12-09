import React from 'react';
import { ThemeProvider as Base, DefaultTheme } from 'styled-components';
import _get from 'lodash.get';


// and extend them!


export const defaultTheme = {
  a11y: {
    default: '#0052CC',
    info: '#0052CC',
    success: '#00855f',
    warning: '#B15f00',
    danger: '#D63B00'
  },
  colors: {
    default: '#0052CC',
    info: '#0052CC',
    success: '#3DA68C',
    warning: '#FF8B00',
    danger: '#FF5630'
  },
  focus: '#CED6E0'
};


declare module 'styled-components' {
  export interface DefaultTheme {
    a11y: {
      default: string
      success: string
      warning: string
      danger: string
    },
    colors: {
      default: string
      success: string
      warning: string
      danger: string
    },
    focus: string
  }
}

export function ThemeProvider({
  children
}: any) {
  return (
    <Base theme={defaultTheme}>
      {children}
    </Base>
  );
}

export default ThemeProvider;
