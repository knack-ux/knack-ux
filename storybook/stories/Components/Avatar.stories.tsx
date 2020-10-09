import React from 'react';
import { Story } from '@storybook/react';
import Avatar, { Props } from '@knack-ux/avatar';
import { version } from '@knack-ux/avatar/package.json';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <Avatar {...args} />
);

Default.args = {
  name: 'Jon Snow'
};

export const Icon: Story<Props> = (args) => (
  <>
    <Avatar
      name="Error"
      icon="error"
      size={32}
      bg="danger"
      mr="8px"
    />
    <Avatar
      name="Error"
      icon="error"
      bg="danger"
      mr="8px"
    />
    <Avatar
      name="Error"
      icon="error"
      size={48}
      bg="danger"
    />
  </>
);

export const DifferentSizes: Story<Props> = (args) => (
  <>
    <Avatar size={24} name="Jon Snow" mr="8px" />
    <Avatar size={32} name="Jon Snow" mr="8px" />
    <Avatar size={40} name="Jon Snow" mr="8px" />
    <Avatar size={48} name="Jon Snow" />
  </>
);
