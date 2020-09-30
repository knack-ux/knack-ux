import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import ThemeProvider from '@knack-ux/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      additional1: {
        name: "375px - 568px",
        styles: {
          width: "375px",
          height: "568px"
        }
      }
    },
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
]