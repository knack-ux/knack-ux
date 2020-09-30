import React from 'react';
import styled from 'styled-components';
import {
  space, layout, typography, color,
  SpaceProps, LayoutProps, TypographyProps, ColorProps
} from 'styled-system';

interface Props extends SpaceProps, LayoutProps, TypographyProps, ColorProps {
  icon: string
  size?: number
  color?: string
}

export function Icon({
  icon,
  size = 24,
  ...props
}: Props) {
  return (
    <IconBase
      className="material-icons-round"
      fontSize={size}
      {...props}
    >
      {icon}
    </IconBase>
  );
}

const IconBase = styled.i`
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

export default Icon;
