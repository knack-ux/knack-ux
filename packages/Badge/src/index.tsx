import React, { ReactText, useContext } from 'react';
import {
  SpaceProps,
  LayoutProps,
  ColorStyleProps,
  BackgroundColorProps
} from 'styled-system';
import { ThemeContext } from 'styled-components';
import { readableColor } from 'polished';

import { BadgeBase } from './styled';

export interface Props extends
  SpaceProps,
  LayoutProps,
  BackgroundColorProps,
  ColorStyleProps
{
  variant?: string
  children: ReactText
}

export function Badge({
  variant = 'info',
  bg,
  backgroundColor,
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
    <BadgeBase
      variant={variant}
      backgroundColor={background}
      color={textColor}
      {...props}
    >
      {children.toString().toUpperCase()}
    </BadgeBase>
  );
}


export default Badge;
