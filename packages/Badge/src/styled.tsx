import styled, { css } from 'styled-components';
import {
  color, space, layout, variant, system
} from 'styled-system';

import { Props } from '.';

interface KnackSystemConfig {
  property: string
  scale: string,
  defaultScale: {}
}

function knack(config: KnackSystemConfig) {
  return (props) => {
    const { theme } = props;
    const propValue = props[config.property];
    const themeScale = theme[config.scale];
    if (!themeScale[propValue]) {
      return css(config.defaultScale);
    }
    return css(themeScale[propValue]);
  };
}

export const BadgeBase = styled.div<Props>`
  display: inline-flex;

  padding: 0 8px;
  border-radius: 3px;

  color: white;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-weight: 500;

  ${space}
  ${layout}

  ${knack({
    property: 'variant',
    scale: 'badge',
    defaultScale: {
      color: 'white',
      background: 'black'
    }
  })}

  ${color}
`;
