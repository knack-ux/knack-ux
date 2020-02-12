import React, { useContext, useState, ReactNode } from 'react';
import { SpaceProps, LayoutProps, BackgroundColorProps } from 'styled-system';
import { ThemeContext } from 'styled-components';
import { readableColor } from 'polished';
import Icon from '@knack-ux/icon';

import { PillBase } from './styled';

export interface Props extends SpaceProps, LayoutProps, BackgroundColorProps {
  children: ReactNode
  variant?: string
  dismissable?: boolean
}

export function Pill({
  variant = 'default',
  bg,
  backgroundColor,
  dismissable = false,
  children,
  ...props
}: Props) {
  const theme = useContext(ThemeContext);
  const background = (
    bg
    || backgroundColor
    || theme.colors[variant]
    || '#000000'
  );
  const textColor = readableColor(background);

  return (
    <PillBase
      variant={variant}
      color={textColor}
      bg={background}
      {...props}
    >
      {children}
    </PillBase>
  );
}


export default Pill;
