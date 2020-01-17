import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const TabList = styled.div`
  position: relative;
  
  margin-bottom: 8px;

  outline: none;

  &:focus {
    & > #${(props) => props['aria-activedescendant']} {
      background: #EBECF0;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 4px;
    background: #EBECF0;
    position: absolute;
    bottom: 0;
  }
`;

export const Tab = styled.button`
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 16px;
  color: #091A42;

  padding: 4px 16px;
  margin-right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background: #EBECF0;
  }

  ${(props) => props['aria-selected'] && css`
    color: #0052CC;
  `}
`;

export const Indicator = styled(motion.div)`
  display: flex;
  height: 4px;
  width: 1px;
  background: #0052CC;

  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
`;

export const TabPanel = styled.div`
  font-family: "Cabin";
`;
