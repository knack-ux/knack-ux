import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  blue: {
    lighter: '#407CD4',
    standard: '#0052CC',
    darker: '#001F4C'
  },
  violet: {
    lighter: '#5F66D7',
    standard: '#3D428B',
    darker: '#21244B'
  },
  red: {
    lighter: '#E3668C',
    standard: '#DD215A',
    darker: '#AA1945'
  },
  orange: {
    lighter: '#FF9670',
    standard: '#FF7F50',
    darker: '#F46C02',
    darkest: '#C85100'
  }
};

/* eslint-disable */
function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Wrapper;
