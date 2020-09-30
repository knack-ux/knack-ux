import React, {
  ReactPortal,
  ReactNode,
  MouseEvent,
  useRef
} from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Icon from '@knack-ux/icon';
import Box from '@knack-ux/box';
import FocusLock from 'react-focus-lock';

import {
  Curtain,
  Container,
  Content,
  CollapseButton
} from './styled';

export interface Props {
  id: string
  show: boolean
  children: ReactNode
  onClose: () => {}
}

export function SideSheet({
  id,
  show,
  onClose,
  children
}: Props): ReactPortal {
  const curtainRef = useRef<HTMLDivElement>();

  let element = document.getElementById('side--sheet');

  if (!element) {
    element = document.createElement('div');
    element.setAttribute('id', 'side--sheet');
    document.body.appendChild(element);
  }

  const curtainKey = `side-sheet-curtain-${id}`;
  const containerKey = `side-sheet-container-${id}`;

  function handleCurtainClick(event: MouseEvent) {
    if (curtainRef.current === event.target) {
      event.stopPropagation();
      onClose();
    }
  }

  function renderSideSheet() {
    return (
      <AnimatePresence>
        {show && (
        <Curtain
          ref={curtainRef}
          key={curtainKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCurtainClick}
        >
          <FocusLock>
            <Container
              key={containerKey}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
            >
              <Box justifyContent="center" padding="24px 16px 0 16px">
                <CollapseButton onClick={onClose}>
                  <Icon icon="close" size={18} />
                </CollapseButton>
              </Box>
              <Content>
                {children}
              </Content>
            </Container>
          </FocusLock>
        </Curtain>
        )}
      </AnimatePresence>
    );
  }

  return (
    createPortal(
      renderSideSheet(),
      element
    )
  );
}

export default SideSheet;
