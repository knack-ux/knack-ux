import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Menu, { Item, Divider, Props } from '@knack-ux/menu';
import { version } from '@knack-ux/menu/package.json';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: { Item, Divider },
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <Menu id="basic-menu" title="Options">
    <Item onSelect={() => console.log('Select Item Selected')}>
      Select
    </Item>
    <Item>Choose</Item>
    <Divider />
    <Item>Delete</Item>
  </Menu>
);

Default.args = {};
