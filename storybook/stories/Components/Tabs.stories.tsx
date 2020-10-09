import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Tabs, { Tab, Props } from '@knack-ux/tabs';
import { version } from '@knack-ux/tabs/package.json';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab },
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
    <Tabs label="A description of the actions" initial="Tuesday">
      <Tab name="Monday">Monday Content</Tab>
      <Tab name="Tuesday">Tuesday Content</Tab>
      <Tab name="Wednesday">Wednesday Content</Tab>
      <Tab name="Thursday">Thursday Content</Tab>
      <Tab name="Friday">Friday Content + Party</Tab>
      <Tab name="Saturday">Saturday Rest</Tab>
      <Tab name="Sunday">Sunday Rest</Tab>
    </Tabs>
  );
};

Default.args = {};
