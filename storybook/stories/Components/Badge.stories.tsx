import React from 'react';
import { Story } from '@storybook/react';
import Badge, { Props } from '@knack-ux/badge';
import { version } from '@knack-ux/badge/package.json';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <>
    <Badge>Info (default)</Badge>
    <Badge intent="success">Success</Badge>
    <Badge intent="warning">Warning</Badge>
    <Badge intent="danger">Danger</Badge>
    <Badge background="royalblue">Custom blue</Badge>
    <Badge background="#00FFFF" color="#000">Custom cyan</Badge>
  </>
);

Default.args = {};
