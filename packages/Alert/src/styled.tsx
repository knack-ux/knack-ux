import styled from 'styled-components';
import {
  system, layout, space, typography,
  TypographyProps
} from 'styled-system';

import { Props } from '.';

type WrapProps = Omit<Props, 'description'>

export const Wrap = styled.div<WrapProps>`
  display: inline-flex;
  align-items: center;

  max-width: 320px;
  padding: 24px 48px 24px 24px;
  
  border-radius: 3px;

  ${space}
  ${layout}
  
  ${system({
    intent: {
      property: 'border',
      scale: 'colors',
      transform: (value, scale) => `3px solid ${scale[value]}`
    }
  })}

  & > i {
  ${system({
    intent: {
      property: 'color',
      scale: 'colors'
    }
  })}
  }
`;

export const Title = styled.div<TypographyProps>`
  color: #001F4C;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 18px;

  margin-left: 16px;
  margin-bottom: 4px;

  ${typography}
`;

export const Description = styled.div<TypographyProps>`
  color: #001F4C;
  font-family: "Open Sans";
  font-size: 16px;

  margin-left: 16px;

  ${typography}
`;

export const Container = styled.div``;
