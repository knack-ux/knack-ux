import styled, { css } from 'styled-components';
import {
  system, space, layout, color
} from 'styled-system';

import { Props } from '.';

export const PillBase = styled.span<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 8px;
  border-radius: 16px;

  font-family: 'IBM Plex Sans';
  font-size: 12px;
  font-weight: 500;
  
  ${system({
    variant: {
      scale: 'colors',
      property: 'background'
    }
  })}

  ${color}
  ${space}
  ${layout}
`;
