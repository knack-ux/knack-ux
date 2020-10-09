import React from 'react';
import { Story } from '@storybook/react';
import Input, { Props } from '@knack-ux/input';
import { version } from '@knack-ux/input/package.json';
import { useState } from '@storybook/addons';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      {...args}
    >
      You can specify most css properties as React props
    </Input>
  );
};

Default.args = {
  id: 'basic-input',
  label: 'Username',
};
