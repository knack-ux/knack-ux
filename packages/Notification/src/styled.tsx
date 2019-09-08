import React from 'react';
import styled, { css } from 'styled-components';

import CloseSVG from './assets/close.svg';

import { Props } from '.';

type WrapProps = Pick<Props, 'type'>

export const Wrap = styled.div<WrapProps>`
  display: inline-flex;
  align-items: center;
  border: 3px solid #0052CC;
  padding: 24px 48px 24px 24px;
  border-radius: 3px;
  position: relative;
  max-width: 320px;

  ${({ type }) => (
    type === 'warning' && css`
      border: 3px solid #FF7F50;
    `
  )}

  ${({ type }) => (
    type === 'error' && css`
      border: 3px solid #DD215A;
    `
  )}
`;

export const Icon = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 18px;
  color: #001F4C;
  margin-left: 16px;
`;

export const Description = styled.div`
  font-family: "Open Sans";
  font-size: 14px;
  color: #001F4C;
  margin-left: 16px;
  margin-top: 4px;
`;

export const Container = styled.div`
`;

export const CloseButton = styled.button.attrs({
  children: <CloseSVG fill="#8993A4" />
})`
  display: flex;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
