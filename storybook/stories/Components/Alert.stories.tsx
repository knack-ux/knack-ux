import React from 'react';
import { Story } from '@storybook/react';
import {
  Title,
  Subtitle,
  Primary,
  Stories,
  Source,
  PRIMARY_STORY,
  ArgsTable,
  // @ts-ignore
} from '@storybook/addon-docs/blocks';
import Alert, { Props } from '@knack-ux/alert';
import { version } from '@knack-ux/alert/package.json';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            {`Latest Version: ${version}`}
          </Subtitle>
          <Source
            language="zsh"
            code="yarn add @knack-ux/alert # npm install --save @knack-ux/alert"
          />
          <Source
            language="js"
            code={'import Alert from \'@knack-ux/alert\';'}
          />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
};

export const Success: Story<Props> = (args) => (
  <Alert {...args} />
);
Success.args = {
  title: 'New Notification',
  description: 'You are a gentleman and I salute you for using this library!',
  intent: 'success',
};

export const Info = Success.bind({});
Info.args = {
  title: 'Info',
  description: 'This is how an info alert looks like',
  intent: 'info',
};

export const Warning = Success.bind({});
Warning.args = {
  title: 'Warning',
  description: 'This is how a warning alert looks like',
  intent: 'warning',
};

export const Danger = Success.bind({});
Danger.args = {
  title: 'Danger',
  description: 'This is how a danger alert looks like',
  intent: 'danger',
};