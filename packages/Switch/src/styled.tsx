import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LayoutProps, layout, space } from 'styled-system';

import { BaseProps } from '.';

export const SwitchBase = styled(motion.label)<BaseProps>`
  display: inline-flex;
  width: 32px;
  height: 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.info};
  align-items: center;
  cursor: pointer;

  & > input {
    border: 0px none;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    opacity: 0;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.focus};
  }

  ${layout}
  ${space}
`;

export type CircleProps = {
  checked?: boolean
}

export const Circle = styled(motion.div)<CircleProps & LayoutProps>`
  width: 12px;
  height: 12px;
  margin: 0 2px;
  background: white;
  border-radius: 50%;

  ${layout}
`;
