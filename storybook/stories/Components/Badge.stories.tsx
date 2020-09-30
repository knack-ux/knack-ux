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
import Box from '@knack-ux/box';
import Badge, { Props } from '@knack-ux/badge';
import { version } from '@knack-ux/badge/package.json';

export default {
  title: 'Components/Badge',
  component: Badge,
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
            code="yarn add @knack-ux/badge # npm install --save @knack-ux/badge"
          />
          <Source
            language="js"
            code={'import Badge from \'@knack-ux/badge\';'}
          />
          <Box>This component will generate a font color based on it&apos;s background</Box>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
};

export const Default: Story<Props> = (args) => (
  <Badge>Info (default)</Badge>
);

Default.args = {};
