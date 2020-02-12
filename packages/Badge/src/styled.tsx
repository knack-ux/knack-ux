import styled from 'styled-components';
import {
  color,
  space,
  layout,
  system
} from 'styled-system';

import { Props } from '.';


export const BadgeBase = styled.div<Props>`
  display: inline-flex;

  padding: 0 8px;
  border-radius: 3px;

  color: white;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-weight: 500;

  ${system({
    variant: {
      scale: 'colors',
      property: 'background'
    }
  })}

  ${space}
  ${layout}
  ${color}
`;
