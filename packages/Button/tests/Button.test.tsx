import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ThemeProvider from '../../ThemeProvider/src';
import Button from '../src';

function Root({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

describe('Button', () => {
  it('should add an icon if icon prop passed', () => {
    const { getByText } = render(
      <Root>
        <Button icon="error">
          Continue
        </Button>
      </Root>
    );

    const iconElement = getByText('error');

    expect(iconElement).toBeTruthy();
    expect(iconElement).toHaveStyle('margin-right: 8px;');
  });

  it('should add an icon if icon prop passed', () => {
    const { getByText } = render(
      <Root>
        <Button icon="error" />
      </Root>
    );

    const iconElement = getByText('error');

    expect(iconElement).toHaveStyle('margin-right: 0');
  });

  it('should match disabled snapshot', () => {
    const { container } = render(
      <Root>
        <Button disabled>
          Continue
        </Button>
      </Root>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Root>
        <Button>
          Continue
        </Button>
      </Root>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
