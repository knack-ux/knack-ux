import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  LayoutProps,
  SpaceProps,
  layout,
  space
} from 'styled-system';


export const Trigger = () => <></>;
export const Content = styled(motion.div)<LayoutProps & SpaceProps>`
  position: absolute;
  top: 0;
  left: 0;

  background: white;
  border: 2px solid #EBECF0;
  border-radius: 3px;

  ${layout}
  ${space}
`;
