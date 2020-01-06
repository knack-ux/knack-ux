import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideSheetBase = styled(motion.div)`
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 480px;
  background: white;
  box-shadow: 0 1px 3px lightgrey;
  overflow-y: scroll;

  & > .side-sheet-close {
    align-self: flex-end;
    margin: 8px 8px 0 0; 
  }
`;
