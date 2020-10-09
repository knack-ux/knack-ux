import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Checkbox, { Props } from '@knack-ux/checkbox';
import { version } from '@knack-ux/checkbox/package.json';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <Checkbox {...args} />
);

Default.args = {
  id: 'basic-checkbox',
  label: 'I agree to follow the laws of physiscs!',
};
