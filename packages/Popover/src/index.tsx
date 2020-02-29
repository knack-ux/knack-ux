import React, {
  useState,
  Children,
  ReactElement,
  useRef,
  useEffect,
  useCallback
} from 'react';
import { createPopper, Instance as PopperInstance, Placement } from '@popperjs/core';

import { Content, Trigger } from './styled';

export interface Props {
  /**
   * Same as PopperJS placement
   * so a combination of top, bottom and
   * start, end center with a dash (-)
   */
  placement?: Placement
  children: React.ReactNode
}

export function Popover({
  placement = 'bottom-end',
  children
}: Props) {
  const [open, setOpen] = useState(false);
  const [popper, setPopper] = useState<PopperInstance>();
  const triggerRef = useRef<HTMLElement>();
  const contentRef = useRef<HTMLDivElement>();

  const childrenArray = Children.toArray(children) as ReactElement[];

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      // @ts-ignore
      if (!contentRef.current.contains(event.target)) {
        setOpen(false);
      }
    }, []
  );

  function show() {
    const popperInstance = createPopper(
      triggerRef.current,
      contentRef.current,
      {
        placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      }
    );

    setPopper(popperInstance);

    document.addEventListener(
      'mousedown',
      handleOutsideClick
    );
  }

  function destroy() {
    if (popper) {
      popper.destroy();
      contentRef.current.removeAttribute('style');
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );
    }
  }

  useEffect(() => {
    if (open) show();
    else destroy();
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
    const content = childrenArray
      .find((child: ReactElement) => child.type === Content);

    const contentAsPopover = React.cloneElement(
      content,
      {
        ref: contentRef,
        'data-show': open,
        ...content.props
      }
    );

    return contentAsPopover;
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
