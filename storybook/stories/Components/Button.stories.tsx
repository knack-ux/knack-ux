import React from 'react';
import { Story } from '@storybook/react';

import Button, { Props } from '@knack-ux/button';
import { version } from '@knack-ux/button/package.json';

import Input from '@knack-ux/input';
import Box from '@knack-ux/box';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <Button appearance="default">
    Default
  </Button>
);

Default.args = {};

export const Primary: Story<Props> = (args) => (
  <Button appearance="primary">
    Primary
  </Button>
);

export const Minimal: Story<Props> = (args) => (
  <Button appearance="minimal" disabled>
    Minimal
  </Button>
);
