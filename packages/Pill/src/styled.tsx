import styled, { css } from 'styled-components';
import { space, layout } from 'styled-system';

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

export const PillBase = styled.span<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 8px;
  border-radius: 16px;

  font-family: 'IBM Plex Sans';
  font-size: 12px;
  font-weight: 500;
  
  ${space}
  ${layout}
  ${knack({
    scale: 'pill',
    property: 'variant',
    defaultScale: {
      background: '#FF7452',
      color: '#000000'
    }
  })}
`;
