import React, { ReactText } from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';

import { BadgeBase } from './styled';

export interface Props extends SpaceProps, LayoutProps {
  variant?: string
  children: ReactText
}

export function Badge({
  variant = 'default',
  children,
  ...props
}: Props) {
  return (
    <BadgeBase
      variant={variant}
      {...props}
    >
      {children.toString().toUpperCase()}
    </BadgeBase>
  );
}


export default Badge;
