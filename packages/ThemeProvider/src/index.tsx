import React from 'react';
import { ThemeProvider as Base, DefaultTheme } from 'styled-components';

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
    success: '#00855f',
    warning: '#FFAB00',
    danger: '#D63B00',
  },
  badge: {
    default: {
      color: '#FFFFFF',
      background: '#0052CC'
    },
    success: {
      color: '#FFFFFF',
      background: '#00855f'
    },
    warning: {
      color: '#000000',
      background: '#FFAB00'
    },
    danger: {
      color: '#000000',
      background: '#FF7452'
    }
  },
  pill: {
    default: {
      color: '#FFFFFF',
      background: '#0052CC'
    },
    success: {
      color: '#FFFFFF',
      background: '#00855f'
    },
    warning: {
      color: '#000000',
      background: '#FFAB00'
    },
    danger: {
      color: '#000000',
      background: '#FF7452'
    }
  },
  breakpoints: ['648px', '1176px'],
  fontSizes: ['12px', '14px', '16px', '18px', '20px'],
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
    breakpoints: string[],
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
