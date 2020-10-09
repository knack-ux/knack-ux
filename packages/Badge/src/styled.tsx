import styled from 'styled-components';
import { system, color } from 'styled-system';
import { readableColor } from 'polished';
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
  })}

  ${system({
    intent: {
      property: 'color',
      scale: 'intents',
      transform: (value, scale) => readableColor(scale[value] as string),
      defaultScale: defaultTheme.intents
    }
  })}

  ${system({
    background: {
      property: 'background',
      scale: 'colors',
      defaultScale: defaultTheme.colors
    }
  })}

  ${color}
`;
