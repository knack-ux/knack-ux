import { ComponentType } from 'react';
import styled from 'styled-components';
import {
  layout, space, color, fontSize
} from 'styled-system';

import { Props } from '.';

type AvatarBaseType = ComponentType<Omit<Props, 'name'>>

export const AvatarBase: AvatarBaseType = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  font-size: 18px;
  font-family: "IBM Plex Sans";
  font-weight: 400;

  overflow: hidden;

  ${layout}
  ${space}
  ${color}
  ${fontSize}
`;
