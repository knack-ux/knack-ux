import React from 'react';
import { ThemeProvider as Base } from 'styled-components';

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
    lighter: '#FFFF97',
    standard: '#FF7F50',
    darker: '#F46C02'
  }
};

function ThemeProvider() {
  return (
    <Base theme={theme} />
  );
}

export default ThemeProvider;
