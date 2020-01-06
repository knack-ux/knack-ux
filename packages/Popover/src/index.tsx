import React, { useRef, useEffect, useState } from 'react';
import Button from '@knack-ux/button';

export function Popover() {
  const ref = useRef<HTMLButtonElement>();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setTop(ref.current.offsetTop + ref.current.offsetHeight + 8);
    setLeft(ref.current.offsetLeft);
  }, [ref]);

  return (
    <>
      <Button ref={ref}>
        Popover
      </Button>
      <div
        style={{
          display: 'inline-flex',
          background: 'red',
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`
        }}
      >
        Something stupid!
      </div>
    </>
  );
}

export default Popover;
