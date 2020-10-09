import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Popover, { Content, Trigger, Props } from '@knack-ux/popover';
import Menu, { Item, Divider } from '@knack-ux/menu';
import Button from '@knack-ux/button';
import { version } from '@knack-ux/popover/package.json';
import Box from '@knack-ux/box';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <Box height="400px">
    <Popover>
      <Trigger>
        <Button>
          Options
        </Button>
      </Trigger>
      <Content width="160px" p="8px">
        <Menu id="basic-menu" title="Options">
          <Item icon="share">Share</Item>
          <Item icon="shuffle">Move</Item>
          <Item icon="edit">Rename</Item>
          <Divider />
          <Item icon="delete_outline">Delete</Item>
        </Menu>
      </Content>
    </Popover>
  </Box>
);

Default.args = {};
