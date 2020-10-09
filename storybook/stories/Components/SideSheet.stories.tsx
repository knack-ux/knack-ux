import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Button from '@knack-ux/button';
import SideSheet, { Props } from '@knack-ux/side-sheet';
import { version } from '@knack-ux/side-sheet/package.json';

export default {
  title: 'Components/SideSheet',
  component: SideSheet,
  parameters: {
    docs: {
      description: {
        component: `Current version: ${version}`
      }
    }
  }
};

export const Default: Story<Props> = (args) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => { setOpen(true); }}>
        Open Side Sheet
      </Button>
      <SideSheet
        id="first"
        show={isOpen}
        onClose={() => setOpen(false)}
      >
        Some Children Content
      </SideSheet>

    </>
  );
};

Default.args = {};
