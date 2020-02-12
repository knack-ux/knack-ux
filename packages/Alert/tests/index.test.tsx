import React from 'react';
import { render } from '@testing-library/react';

import Alert from '../src';
import ThemeProvider from '../../ThemeProvider';

describe('<Alert />', () => {
  test('snapshots', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Alert
          title="Error 500"
          description="Something went wrong!"
          intent="danger"
        />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
