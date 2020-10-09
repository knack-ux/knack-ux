import React, { ReactText } from 'react';

import { BadgeBase } from './styled';

export interface Props {
  intent?: string
  color?: string
  background?: string
  children: ReactText
}

export function Badge({
  intent = 'info',
  color = '',
  background = '',
  children,
  ...props
}: Props) {
  return (
    <BadgeBase
      intent={intent}
      background={background}
      color={color}
      {...props}
    >
      {children.toString().toUpperCase()}
    </BadgeBase>
  );
}

export default Badge;
