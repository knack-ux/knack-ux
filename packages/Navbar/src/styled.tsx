import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Wrap as NotificationWrap } from '@knack-ux/alert/lib/styled';

import MenuSVG from './assets/menu.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  & > ${NotificationWrap} {
    max-width: unset;
    display: flex;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 3px lightgrey;
  }
`;

export const HorizontalLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.violet.standard};
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 12px 24px;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  box-shadow: 0 0 3px lightgrey;

  > svg {
    display: flex;
    width: 32px;
    height: 32px;
  }
`;

type ExpandProps = {
  active?: boolean
}

export const Expand = styled.button.attrs(() => ({
  children: (
    <>
      <MenuSVG fill="#182B4B" />
      Menu
    </>
  )
}))<ExpandProps>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 16px;
  background-color: white;
  border: none;
  color: #172B4C;
  border-radius: 3px;
  outline: none;
  transition-property: background-color, border;
  transition-duration: .3s;
  border: 2px solid #DFE1E6;
  cursor: pointer;

  :hover {
    background-color: #DFE1E6;
  }

  & > :first-child {
    margin-right: 8px;
  }

  ${({ active }) => (
    active && css`
      color: white;
      background-color: ${({ theme }) => theme.violet.standard};
      border: 2px solid ${({ theme }) => theme.violet.standard};

      :hover {
        background-color: ${({ theme }) => theme.violet.standard};
      }

      & > :first-child {
        fill: white;
      }
    `
  )}
`;

export type LinkProps = {
  fixed?: boolean
}

export const Link = styled.a<LinkProps>`
  align-self: flex-start;
  font-size: 18px;
  font-family: "Open Sans";
  color: white;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  text-decoration: none;

  :hover {
    color: white;
    text-decoration: none;
  }
`;

export const Menu = styled(motion.div)`
  position: relative;

  height: 0;
  
  overflow: hidden;
  box-shadow: 0 0 3px lightgrey;
`;

export const Nav = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.violet.standard};
  display: flex;
  flex-direction: column;
  padding: 32px 24px;

  ${Link} + ${Link} {
    margin-top: 24px;
  }
`;

export const Fixed = styled.div`
  display: flex;

  & > ${Link} {
    display: flex;
    color: #172B4C;
    font-size: 16px;
    padding: 8px 14px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 3px;
    position: relative;
    transition-property: background-color, border;
    transition-duration: .3s;
    border: 2px solid white;
    
    
    :hover {
      background-color: #DFE1E6;
      border: 2px solid #DFE1E6;
    }

    :nth-child(n + 1) {
      margin-right: 16px;
    }
  }
`;
