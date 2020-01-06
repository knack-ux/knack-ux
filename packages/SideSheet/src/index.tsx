import React, {
  useRef,
  useEffect,
  ReactNode,
  MouseEvent,
  KeyboardEvent
} from 'react';
import { createPortal } from 'react-dom';
import { useAnimation } from 'framer-motion';
import Button from '@knack-ux/button';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { SideSheetBase, Container } from './styled';

export interface Props {
  show?: boolean
  width?: number
  children: ReactNode
  onCloseComplete?: () => void
  onOpenComplete?: () => void
  onBeforeClose?: () => boolean
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEscapePress?: boolean
}

const animations = {
  container: {
    show: {
      x: 0,
      transition: {
        type: 'tween',
        ease: 'circOut',
        duration: 0.3
      }
    },
    hide: {
      x: '100%',
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.3
      }
    }
  },
  shade: {
    show: {
      background: 'rgba(23, 43, 77, 0.6)',
      transition: {
        type: 'tween',
        ease: 'linear',
        duration: 0.4
      }
    },
    hide: {
      background: 'rgba(0, 0, 0, 0)',
      transition: {
        type: 'tween',
        ease: 'linear',
        duration: 0.4
      }
    }
  }
};

export function SideSheet({
  show = false,
  width = 640,
  onBeforeClose = () => true,
  onCloseComplete,
  onOpenComplete,
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  children
}: Props) {
  const containerRef = useRef();
  const containerAnimation = useAnimation();
  const shadeAnimation = useAnimation();

  let element = document.getElementById('side-sheet');

  useEffect(() => {
    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', 'side-sheet');
      document.body.appendChild(element);
    }
    if (show) {
      containerAnimation.start(animations.container.show);
      shadeAnimation.start(animations.shade.show);
      if (onOpenComplete) onOpenComplete();
    }
  }, [show]);

  async function handleClose() {
    const shouldClose = onBeforeClose();
    if (shouldClose) {
      await Promise.all([
        containerAnimation.start(animations.container.hide),
        shadeAnimation.start(animations.shade.hide)
      ]);

      document.body.removeChild(element);
      if (onCloseComplete) onCloseComplete();
    }
  }

  function handleEscapeKeyPress(event: KeyboardEvent) {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      handleClose();
    }
  }

  function handleShadeClick(event: MouseEvent) {
    // @ts-ignore
    if (!containerRef.current.contains(event.target) && shouldCloseOnOverlayClick) {
      handleClose();
    }
  }

  function renderSheet() {
    return (
      <FocusLock>
        <SideSheetBase
          initial={{ background: 'rgba(0,0,0,0)' }}
          animate={shadeAnimation}
          onClick={handleShadeClick}
        >
          <RemoveScroll enabled>
            <Container
              initial={{ x: width }}
              animate={containerAnimation}
              ref={containerRef}
              onKeyUp={handleEscapeKeyPress}
            >
              <Button
                mt="8px"
                ml="8px"
                circular
                icon="close"
                className="side-sheet-close"
                onClick={handleClose}
              />
              {children}
            </Container>
          </RemoveScroll>
        </SideSheetBase>
      </FocusLock>
    );
  }


  if (!show) return null;

  return createPortal(
    renderSheet(),
    element
  );
}


export default SideSheet;
