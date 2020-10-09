import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Radio, { Props } from '@knack-ux/radio';
import { version } from '@knack-ux/radio/package.json';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => {
  const [value, set] = useState('');
  return (
    <Radio
      id="basic-radio"
      label="Who is your favorite scientist?"
      value={value}
      options={[
        { label: 'John Atanasoff', value: 'atanasoff' },
        { label: 'Nikola Tesla', value: 'tesla' },
        { label: 'Thomas Edison', value: 'edison' }
      ]}
      onChange={(event) => set(event.target.value)}
    />
  );
};

Default.args = {};
