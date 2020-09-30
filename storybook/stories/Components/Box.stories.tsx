import React from 'react';
import { Story } from '@storybook/react';
import {
  Title,
  Subtitle,
  Primary,
  Stories,
  Source,
  PRIMARY_STORY,
  ArgsTable,
  // @ts-ignore
} from '@storybook/addon-docs/blocks';
import Box, { Props } from '@knack-ux/box';
import { version } from '@knack-ux/box/package.json';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            {`Latest Version: ${version}`}
          </Subtitle>
          <Source
            language="zsh"
            code="yarn add @knack-ux/box # npm install --save @knack-ux/box"
          />
          <Source
            language="js"
            code={'import Box from \'@knack-ux/box\';'}
          />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
};

export const Default: Story<Props> = (args) => (
  <Box {...args}>
    You can specify most css properties as React props
  </Box>
);

Default.args = {
  p: 24,
  color: 'white',
  bg: 'royalblue',
  fontFamily: 'IBM Plex Sans',
  borderRadius: 4
};
