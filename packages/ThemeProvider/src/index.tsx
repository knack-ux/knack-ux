import React from 'react';
import { ThemeProvider as Base } from 'styled-components';

export const defaultTheme = {
  text: {
    default: '#172B4D',
    info: '#0052CC',
    success: '#00855f',
    warning: '#B15f00',
    danger: '#D63B00'
  },
  colors: {
    info: '#0052CC',
    success: '#00855f',
    warning: '#FFAB00',
    danger: '#D63B00',
  },
  breakpoints: ['648px', '1176px'],
  fontSizes: ['12px', '14px', '16px', '18px', '20px'],
  focus: '#6554C0'
};


declare module 'styled-components' {
  // @ts-ignore
  export type DefaultTheme = typeof defaultTheme
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
