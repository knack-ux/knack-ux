import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  overflow-x: auto;
  
  /* border-bottom: 4px solid #EBECF0; */

  outline: none;

  &:focus {
    & > #${(props) => props['aria-activedescendant']} {
      background: #EBECF0;
    }
  }

  & {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  &::-webkit-scrollbar { 
      display: none;  /* Safari and Chrome */
  }
`;

export const Tab = styled.button`
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 16px;
  color: #091A42;

  padding: 4px 16px 8px 16px;
  margin-right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

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
  bottom: 0;
  position: absolute;

  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
`;

export const TabPanel = styled.div`
  font-family: "Cabin";
`;


export const BorderBottom = styled.div`
  width: 100%;
  height: 4px;
  background: #EBECF0;
  transform: translateY(-4px);
  margin-bottom: 8px;
`;
