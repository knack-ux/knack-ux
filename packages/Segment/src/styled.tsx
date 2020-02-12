import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  border, layout, space,
  BorderProps, LayoutProps, SpaceProps
} from 'styled-system';

export const SegmentBase = styled.div<LayoutProps & BorderProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;

  list-style: none;
  border: 2px solid ${({ theme }) => theme.colors.info};
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.focus};
  }

  ${border};
  ${layout};
`;

export const Option = styled(motion.label)<SpaceProps>`
  display: inline-flex;
  align-items: center;

  padding: 8px 16px;
  
  font-size: 14px;
  line-height: 14px;
  font-family: 'Cabin';
  
  z-index: 1;
  position: relative;
  user-select: none;
  cursor: pointer;

  & > input {
    position: absolute;
    appearance: none;
  }

  ${space}
`;

export const Indicator = styled(motion.div)<BorderProps>`
  background: ${({ theme }) => theme.colors.info};

  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  z-index: 0;
  border: 1px solid ${({ theme }) => theme.colors.info};

  transform: scaleX(0);
  transform-origin: left;

  ${border};
`;
