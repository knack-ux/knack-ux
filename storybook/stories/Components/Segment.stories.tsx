import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Segment, { Props } from '@knack-ux/segment';
import { version } from '@knack-ux/segment/package.json';

export default {
  title: 'Components/Segment',
  component: Segment,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => {
  const [selected, setSelected] = useState('days');
  return (
    <Segment
      id="time"
      options={[
        { label: 'Hours', value: 'hours' },
        { label: 'Days', value: 'days' },
        { label: 'Weeks', value: 'weeks' }
      ]}
      value={selected}
      onChange={(event) => {
        setSelected(event.target.value);
      }}
    />
  );
};

Default.args = {};
