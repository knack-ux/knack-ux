import React, { ReactText, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { TextColorProps } from 'styled-system';
import { readableColor } from 'polished';

import { BadgeBase } from './styled';

export interface Props extends TextColorProps {
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
  const theme = useContext(ThemeContext);

  let internalColor = readableColor(theme.intents[intent]);
  if (background) internalColor = readableColor(background);
  if (color) internalColor = color;

  return (
    <BadgeBase
      intent={intent}
      background={background}
      color={internalColor}
      {...props}
    >
      Something else
    </BadgeBase>
  );
}

export default Badge;
