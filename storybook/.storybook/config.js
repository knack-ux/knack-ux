import React from 'react';
import { create } from '@storybook/theming';
import { addParameters, addDecorator, configure } from '@storybook/react';
import ThemeProvider from '@knack-ux/theme';

const theme = create({
  base: 'light',

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Knack UI',
  brandUrl: 'https://knack-ui.herokuapp.com',
});

addParameters({
  options: {
    theme
  },
});

addDecorator((storyFn) => (
  <ThemeProvider>
    {storyFn()}
  </ThemeProvider>
))

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);