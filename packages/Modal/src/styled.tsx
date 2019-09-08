import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import CloseSVG from './assets/close.svg';

export const Shade = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;

  background: rgba(0,0,0,0.4);
`;

export const Container = styled(motion.div)`
  position: relative;

  max-width: 640px;
  padding: 56px 0;

  opacity: 0;
  background: white;
  border-radius: 12px;
`;

export const Content = styled.div`
  max-height: 640px;

  padding: 24px 32px;

  overflow-y: scroll;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 56px;
  padding: 0 32px;

  box-sizing: border-box;
  box-shadow: 0 1px 3px lightgrey;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 56px;
  padding: 0 32px;

  box-sizing: border-box;
  box-shadow: 0 -1px 3px lightgrey;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const CloseButton = styled.button.attrs({
  children: (
    <CloseSVG />
  )
})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  border: none;
  border-radius: 50%;
  padding: 8px;
  margin: 8px;

  z-index: 1;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;

  :hover, :focus {
    background: lightgrey;
  }
`;
