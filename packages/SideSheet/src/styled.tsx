import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CollapseButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  padding: 0;

  background: ${({ theme }) => theme.colors.info};
  border-radius: 50%;
  border: none;

  z-index: 1;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;

    box-shadow: 
      0 0 0 2px #FFFFFF,
      0 0 0 4px #0052CC
  }

  & > i {
    color: white;
  }
`;

export const Curtain = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  &::before {
    background-color: rgba(23, 43, 77, 0.8);
    left: 0px;
    top: 0px;
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    content: " ";
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  position: absolute;

  left: auto;
  right: 0;

  max-width: 100vw;
  height: 100vh;
  width: 640px;
  transform: translateX(100%);
  box-shadow: 0 1px 3px lightgrey;
  background: white;
  

  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: scroll;
  margin-top: 24px;
`;
