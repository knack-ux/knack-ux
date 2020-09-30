import styled from 'styled-components';
import { system, color } from 'styled-system';

import { defaultTheme } from '@knack-ux/theme';

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
    intent: {
      property: 'background',
      scale: 'intents',
      defaultScale: defaultTheme.intents
    },
    background: {
      property: 'background',
      scale: 'colors',
      defaultScale: defaultTheme.colors
    }
  })}

  ${color}
`;
