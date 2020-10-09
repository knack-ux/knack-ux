import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Pill, { Props } from '@knack-ux/pill';
import { version } from '@knack-ux/pill/package.json';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => (
  <>
    <Pill mr="8px">1</Pill>
    <Pill variant="success" mr="8px">2</Pill>
    <Pill variant="warning" mr="8px">3</Pill>
    <Pill variant="danger">4</Pill>
  </>
);

Default.args = {};
