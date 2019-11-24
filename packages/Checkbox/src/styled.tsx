import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: inline-flex;
  align-items: center;

  color: #182C61;
  font-family: "Open Sans";

  outline: none;
  cursor: pointer;
  user-select: none;
`;

export const CheckboxIcon = styled(motion.div).attrs({
  children: (
    <i className="material-icons-round">
      check
    </i>
  )
})`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin-right: 8px;

  background: #FFFFFF;
  box-sizing: border-box;

  & > i {
    font-size: 20px;
  }
`;
