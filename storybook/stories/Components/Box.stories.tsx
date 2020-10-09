import React from 'react';
import { Story } from '@storybook/react';
import Box, { Props } from '@knack-ux/box';
import { version } from '@knack-ux/box/package.json';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
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
