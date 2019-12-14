import React from 'react';
import styled from 'styled-components';
import {
  space, layout, typography,
  SpaceProps, LayoutProps, TypographyProps
} from 'styled-system';


interface Props extends SpaceProps, LayoutProps, TypographyProps {
  icon: string
  size?: number
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
  ${space}
  ${layout}
  ${typography}
`;

export default Icon;
