import React from 'react';
import { Story } from '@storybook/react';
import { Alert } from '@knack-ux/alert';
import { version } from '@knack-ux/alert/package.json';

console.log({ Alert });

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Success: Story = (args) => (
  <Alert {...args} />
);

Success.args = {
  title: 'New Notification',
  description: 'You are a gentleman and I salute you for using this library!',
  intent: 'success',
};
