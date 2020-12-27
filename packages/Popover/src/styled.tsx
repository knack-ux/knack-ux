import styled from 'styled-components';
import {
  LayoutProps,
  SpaceProps,
  layout,
  space
} from 'styled-system';

export const Trigger = styled.div`
  display: inline-flex;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const Content = styled.div<LayoutProps & SpaceProps>`
  position: absolute;
  display: none;
  background: white;
  border: 2px solid #EBECF0;
  border-radius: 5px;
  margin-top: 8px;

  &[data-show="true"] {
    display: flex;
  }

  ${layout}
  ${space}
`;
