import React from 'react';
import { render } from '@testing-library/react';

import Avatar from '../src';

describe('<Avatar /> component', () => {
  it('match snapshot on 40px size (initials)', () => {
    const { container } = render(
      <Avatar name="Jon Snow" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('match snapshot on 24px size (initials)', () => {
    const { container } = render(
      <Avatar name="Jon Snow" size={24} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('match snapshot on 40px size (image src)', () => {
    const { container } = render(
      <Avatar
        name="Jon Snow"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Nikola-tesla-3909844.jpg"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
