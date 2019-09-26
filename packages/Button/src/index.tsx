import React from 'react';

import { Primary, Secondary } from './styled';

type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
interface Props extends ReactButton {
  primary?: boolean
  secondary?: boolean
}

function Button({
  primary = true,
  secondary,
  ...props
}: Props) {
  return (
    secondary
      ? <Secondary {...props} />
      : <Primary {...props} />
  );
}

export { Primary, Secondary, Props };
export default Button;
