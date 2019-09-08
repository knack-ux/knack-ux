import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 16px;
`;

export const UnselectedLine = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  
  right: 8px;
  left: 8px;

  height: 4px;
  border-radius: 2px;

  background: #4ED9D9;
`;

export const SelectedLine = styled(motion.div)`
  display: flex;
  align-self: center;
  position: absolute;
  
  right: 8px;
  left: 8px;

  height: 4px;
  border-radius: 2px;

  background: #008B8B;
`;

export const Thumb = styled(motion.div)`
  display: flex;
  position: relative;
  box-sizing: border-box;

  width: 16px !important;
  height: 16px !important;
  border-radius: 50%;
  border: 3px solid darkcyan;
  z-index: 1;

  padding: 0;

  background: darkcyan;
  cursor: pointer;

  :focus {
    outline: none;
    box-shadow: 0 0 3pt 3pt #00ADAD !important;
    border: 3px solid #FFFFFF !important;
  }
`;

interface PointerProps {
  value: number
}

export const Pointer = styled.div.attrs(
  ({ value }: PointerProps) => ({
    children: (
      <span>{value}</span>
    )
  })
)<PointerProps>`

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform:
    translateX(calc(-50% + 5px))
    rotate(-45deg);
  
  top: -64px;
  
  width: 40px;
  height: 40px;
  
  color: white;
  background-color: #008B8B;
  border-radius: 50% 50% 50% 0;

  & > span {
    transform: rotate(45deg);
  }
`;
