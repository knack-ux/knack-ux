import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import {
  LayoutProps,
  SpaceProps,
  ColorStyleProps,
  TypographyProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundColorProps
} from 'styled-system';

import { BoxBase } from './styled';

export interface Props extends LayoutProps,
  SpaceProps,
  ColorStyleProps,
  TypographyProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundColorProps,
  ComponentPropsWithoutRef<'div'> {}

export function Box({
  children,
  ...props
}: Props) {
  return (
    <BoxBase
      {...props}
    >
      {children}
    </BoxBase>
  );
}

export default Box;
