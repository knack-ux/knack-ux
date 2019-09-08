import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Shade = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
`;

export const Container = styled(motion.div)`
  position: fixed;
  top: auto;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 100%;
  overflow: auto;

  box-shadow: 0 3px 10px #505F79;

  /* border-radius: 32px 32px 0 0; */
  
`;

export const Top = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  height: 32px;

  background: white;
  transform: none !important;
`;

export const Bottom = styled.div`
  position: sticky;
  bottom: 0;

  padding: 16px 24px;

  background: white;
  border-top: 1px solid #C1C7D0;
`;

export const Inner = styled.div`
  display: flex;
  height: auto;
  background: white;

  padding: 0px 24px 24px;
`;

export const DragIndicator = styled.div`
  align-self: center;

  height: 6px;
  width: 40px;
  border-radius: 4px;
  margin-top: 4px;

  background: #C1C7D0;
`;
