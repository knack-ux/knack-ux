import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Switch, { Props } from '@knack-ux/switch';
import { version } from '@knack-ux/switch/package.json';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      id="checked"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

Default.args = {};
