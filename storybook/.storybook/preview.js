import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  Title,
  Subtitle,
  Primary,
  Stories,
  Source,
  PRIMARY_STORY,
  ArgsTable,
  Description,
  // @ts-ignore
} from '@storybook/addon-docs/blocks';
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
  },
  docs: {
    page: () => {
      return (
        <>
          <Title />
          <Description />
          <Source
            language="zsh"
            code="yarn add @knack-ux/button # npm install --save @knack-ux/button"
          />
          <Source
            language="js"
            code={'import Button from \'@knack-ux/button\';'}
          />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
]