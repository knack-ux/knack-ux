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
  display: none;
  background: white;
  border: 2px solid #EBECF0;
  border-radius: 3px;
  margin-top: 8px;

  &[data-show="true"] {
    display: flex;
  }

  ${layout}
  ${space}
`;
