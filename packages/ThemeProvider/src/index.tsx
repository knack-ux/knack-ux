import React from 'react';
import { ThemeProvider as Base, DefaultTheme } from 'styled-components';
import _get from 'lodash.get';

export const defaultTheme = {
  colors: {
    default: '#0052CC',
    info: '#0052CC',
    success: '#3DA68C',
    warning: '#FF7F50',
    danger: '#DD215A'
  },
  focus: '#CED6E0'
};


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
