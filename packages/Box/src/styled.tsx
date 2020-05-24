import styled from 'styled-components';
import {
  layout,
  space,
  color,
  typography,
  flexbox,
  border,
  position,
  shadow,
} from 'styled-system';

export const BoxBase = styled.div`
  display: flex;

  ${layout}
  ${space}
  ${color}
  ${typography}
  ${flexbox}
  ${border}
  ${position}
  ${shadow}
`;
