import React, {
  useState,
  Children,
  ReactElement,
  useRef,
  useEffect,
  useCallback
} from 'react';
import { useMotionValue } from 'framer-motion';
import { createPortal } from 'react-dom';

import { Content, Trigger } from './styled';
import { calcPosition } from './helper';

export interface Props {
  /**
   *  Any string containing `left`, `right`, `top`, `bottom`
   */
  placement?: string
  children: React.ReactNode
}

export function Popover({
  placement = 'left-bottom',
  children
}: Props) {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLElement>();
  const contentRef = useRef<HTMLElement>();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  let element = document.getElementById('popover-portal');
  const childrenArray = Children.toArray(children) as ReactElement[];

  const reposition = useCallback(() => {
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const nextPositions = calcPosition(
      placement,
      contentRect,
      triggerRect
    );
    x.set(nextPositions.x);
    y.set(nextPositions.y);
  }, []);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      // @ts-ignore
      if (!contentRef.current.contains(event.target)) {
        setOpen(false);
      }
    }, []
  );

  useEffect(() => {
    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', 'popover-portal');
      document.body.appendChild(element);
    }

    if (open) {
      reposition();
      window.addEventListener('resize', reposition);
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', reposition);
    }
  }, [open]);


  function renderTrigger() {
    const trigger = (
      childrenArray
        .find((child: ReactElement) => child.type === Trigger)
        .props.children
    );

    return React.cloneElement(trigger, {
      ref: triggerRef,
      style: { pointerEvents: open ? 'none' : 'auto' },
      onClick: () => {
        setOpen(!open);
      },
    });
  }

  function renderContent() {
    const content = React.cloneElement(
      (
        childrenArray
          .find((child: ReactElement) => child.type === Content)
      ),
      {
        ref: contentRef,
        style: { x, y },
        transition: {
          type: 'linear'
        }
      }
    );

    return open && createPortal(
      content,
      element
    );
  }

  return (
    <div>
      {renderTrigger()}
      {renderContent()}
    </div>
  );
}

export { Trigger, Content };
export default Popover;
