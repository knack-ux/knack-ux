import styled from 'styled-components';
import { system } from 'styled-system';

import { Props } from '.';

export const ItemBase = styled.div<Props>`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #091A42;

  padding: 4px 8px;
  border: none;
  background: transparent;

  z-index: 0;
  outline: none;
  transition: background .2s;
  cursor: pointer;

  &:hover {
    background: #F4F5F7;
  }

  &:focus, &:active {
    background: #DEEBFF !important; 
  }

  & > i {
    font-size: 16px;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  ${system({
    intent: {
      scale: 'colors',
      property: 'color'
    }
  })}
`;
