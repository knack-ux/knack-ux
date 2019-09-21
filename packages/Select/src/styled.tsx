import styled, { css } from 'styled-components';

import {
  Wrap as BaseWrap,
  Base as BaseInput,
  Label as BaseLabel,
  Container as BaseContainer
} from '@chrispcode/knack-input/lib/styled';

import ArrowSVG from './assets/arrow-down.svg';

type ButtonListOptionProps = {
  active: boolean
  error?: string
  warning?: string
}

export const Wrap = styled(BaseWrap)`
  position: relative;
`;

export const Button = styled(BaseInput).attrs({
  as: 'button',
  'aria-haspopup': 'listbox'
})<ButtonListOptionProps>`
  display: inline-flex;
  min-height: 50px;
  position: relative;

  ${({ active }) => (
    active && css`
      pointer-events:none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `
  )}
`;

export const Label = styled(BaseLabel).attrs({
  as: 'span'
})``;

export const List = styled.ul.attrs({
  role: 'listbox',
  tabIndex: -1
})<ButtonListOptionProps>`
  position: absolute;
  transform: translate(0, 100%);
  bottom: 0px;

  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: -2px;

  border: 2px solid #E1E2E6;

  outline: none;
  list-style: none;
  box-sizing: border-box;

  ${({ active }) => (
    active && css`
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;

      bottom: 2px;
    `
  )}

  ${({ warning, error }: any) => (
    (warning || error) && css`
      width: calc(100% - 32px);
      bottom: 0px;
    `
  )}
`;

export const Option = styled.li
  .attrs(
    ({ active = false }: ButtonListOptionProps) => ({
      role: 'option',
      'aria-selected': active
    })
  )<ButtonListOptionProps>`
  padding: 8px 16px;

  background: white;
  
  cursor: default;

  :hover {
    background: #EBECF0;
  }

  ${({ active }) => (
    active && css`
      background-color: #DFE1E6;
      :hover {
        background: #DFE1E6;
      }
    `
  )}
`;

export const ArrowIcon = styled(ArrowSVG)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  fill: #172B4D;
`;

export const Container = styled(BaseContainer)`
`;
