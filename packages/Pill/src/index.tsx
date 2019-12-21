import React, { ReactText } from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';

import { PillBase } from './styled';

export interface Props extends SpaceProps, LayoutProps {
  children: ReactText
  variant?: string
}

export function Pill({
  variant = 'default',
  children,
  ...props
}: Props) {
  return (
    <PillBase
      variant={variant}
      {...props}
    >
      {children}
    </PillBase>
  );
}


export default Pill;
