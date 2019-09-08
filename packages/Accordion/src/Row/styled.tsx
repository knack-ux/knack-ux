import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import ExpandSVG from '../assets/expand.svg';

export const RowWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    display: flex;

    margin: 0;
  }
`;

type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface HeaderProps extends ReactButton {
  title: string
  open?: boolean
}

export const Header = styled.button.attrs(
  ({ title }) => ({
    children: (
      <>
        <span>{title}</span>
        <ExpandSVG />
      </>
    )
  })
)<HeaderProps>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
  margin: 0;

  border: none;
  background: white;
  box-shadow: 0 1px 3px #C1C7D0;

  cursor: pointer;
  outline: none;

  :hover, :focus {
    padding: 24px 24px 24px 20px;
    border-left: 4px solid ${({ theme }) => theme.violet.lighter};
  }

  ${({ open }) => (
    open && css`
      padding: 24px 24px 24px 20px;
      border-left: 4px solid ${({ theme }) => theme.violet.standard} !important;
    `
  )}

  & > span {
    margin: 0;

    text-align: left;
    font: 600 18px "Open Sans";
  }

  & > svg {
    transform: rotate(-90deg);

    ${({ open }) => (
    open && css`
      transform: rotate(-270deg);
      fill: ${({ theme }) => theme.violet.standard};
    `)}
  }
`;

export const Content = styled(motion.div)`
  display: flex;

  height: 0;

  background: white;
  box-shadow: 0 1px 3px #C1C7D0;
  
  overflow: hidden;

  & > * {
    box-sizing: border-box;

    margin: 24px;
  }
`;
