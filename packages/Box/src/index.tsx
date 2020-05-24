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
} from 'styled-system';

import { BoxBase } from './styled';

interface Props extends LayoutProps,
  SpaceProps,
  ColorStyleProps,
  TypographyProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
  as?: any
}

export function Box({
  as = 'div',
  children,
  ...props
}: Props) {
  return (
    <BoxBase
      as={as}
      {...props}
    >
      {children}
    </BoxBase>
  );
}


export default Box;
