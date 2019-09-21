import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FocusOn } from 'react-focus-on';
import { useAnimation } from 'framer-motion';

import {
  Bottom,
  CloseButton,
  Container,
  Content,
  Shade,
  Top
} from './styled';

interface Props {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

function Modal({
  open,
  children,
  onClose
}: Props) {
  const containerControl = useAnimation();
  const shadeControl = useAnimation();

  useEffect(() => {
    if (open) {
      containerControl.start({
        opacity: 1,
        transform: 'translate(0px, 0px)'
      });
      shadeControl.start({
        opacity: 1
      });
    } else {
      containerControl.start({
        opacity: 0,
        transform: 'translate(0px, 72px)'
      });
      shadeControl.start({
        opacity: 0
      });
    }
  }, [open]);

  function renderPart(
    Part: (
      typeof Top |
      typeof Content |
      typeof Bottom
    )
  ) {
    return React.Children.toArray(children).filter(
      (child: React.ReactElement) => (
        child.type === Part
      )
    );
  }

  function renderPortal() {
    return (
      <Shade
        initial={{
          opacity: 0
        }}
        animate={shadeControl}
      >
        <FocusOn
          onEscapeKey={onClose}
          onClickOutside={onClose}
        >
          <Container
            initial={{
              opacity: 0,
              transform: 'translate(0px, 72px)'
            }}
            animate={containerControl}
          >
            <CloseButton onClick={onClose} />
            {renderPart(Top)}
            {renderPart(Content)}
            {renderPart(Bottom)}
          </Container>
        </FocusOn>
      </Shade>
    );
  }

  return open ? ReactDOM.createPortal(
    renderPortal(),
    document.body
  ) : null;
}

export { Top, Bottom, Content };
export default Modal;
