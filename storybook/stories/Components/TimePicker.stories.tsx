import React, { useState } from 'react';
import { Story } from '@storybook/react';
import TimePicker, { Props } from '@knack-ux/time-picker';
import { version } from '@knack-ux/time-picker/package.json';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = ({
  value: valueProp,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState('13:00');

  return (
    <TimePicker
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...args}
    />
  );
};

Default.args = {
  id: 'start-time-input',
  label: 'Start Time'
};
