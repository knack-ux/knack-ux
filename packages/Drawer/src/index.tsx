import React, {
  useRef, useState, useEffect
} from 'react';
import ReactDOM from 'react-dom';
import {
  useMotionValue, useTransform, useSpring, PanInfo
} from 'framer-motion';
import { ScrollLocky } from 'react-scroll-locky';
import {
  Bottom,
  Container,
  DragIndicator,
  Inner,
  Shade,
  Top
} from './styled';

const DAMPING = 2000;
const MASS = 7;
const SNAPPY_STIFFNESS = 100000;
const SLOW_STIFFNESS = 2000;

const SHADOW_OFFSET = 4;
const SNAP_TO_CLOSE_PERCENT = 0.5;
const BORDER_RADIUS_START_PX = 40;

const SHADE_COLOUR_WHEN_TOP = 'rgba(200, 200, 200, 0.6)';
const SHADE_COLOUR_WHEN_BOTTOM = 'rgba(255,255,255,0)';


interface Props {
  children: React.ReactNode,
  onClose: () => void
}

function Drawer({
  children,
  onClose
}: Props) {
  const shadeRef = useRef(null);
  const [shadeHeight, setShadeHeight] = useState(0);

  const containerRef = useRef(null);
  const [
    containerHeight, setContainerHeight
  ] = useState(0);

  const [dragEnabled, setDrag] = useState(false);
  /**
   * y (translateY) is what moves
   * the container up and down,
   * depending on the user action.
   * It ranges from 0 (open) til
   * the height of the container
   * (height ↑)(closed)
   */
  const y = useSpring(
    containerHeight, {
      damping: DAMPING,
      stiffness:
        dragEnabled
          ? SNAPPY_STIFFNESS
          : SLOW_STIFFNESS,
      mass: MASS
    }
  );
  /**
   * Cannot calculate opacity directly
   * because <Shade> is a parent of all
   * the other elements
   */
  const shadeBackground = useTransform(
    y,
    [0, containerHeight],
    [SHADE_COLOUR_WHEN_TOP, SHADE_COLOUR_WHEN_BOTTOM]
  );
  /**
   * Calculate reverseY in order
   * to be able to calculate
   * border-radius
   */
  const reverseY = useTransform(
    y, [0, containerHeight], [containerHeight, 0]
  );
  /**
   * Border radius stays 16px until
   * it reaches the top 40px of the
   * screen, where is will animate
   * from 16px to 0px
   */
  const borderRadius = useTransform(
    reverseY,
    [0, shadeHeight - BORDER_RADIUS_START_PX, shadeHeight],
    [16, 16, 0]
  );

  useEffect(
    () => y.onChange((currentY) => {
      // it animates the last pixel for a very long time
      if (Math.round(currentY) === containerHeight) {
        onClose();
      }
    }), [containerHeight]
  );

  useEffect(() => {
    setShadeHeight(shadeRef.current.offsetHeight);

    const currentContainerHeight = containerRef.current.offsetHeight;
    // 8px if boxShadow interferes
    setContainerHeight(currentContainerHeight + SHADOW_OFFSET);
    y.set(currentContainerHeight, false);

    y.set(0);
    setDrag(true);
  }, []);

  function handleDrag(
    event: MouseEvent | TouchEvent,
    info: PanInfo
  ) {
    y.set(
      info.offset.y
    );
  }

  function handleDragEnd(
    event: MouseEvent | TouchEvent,
    info: PanInfo
  ) {
    setDrag(false);
    /**
     * Check if the user has dragged more
     * than 50% and then close or get back
     * to initial position (top)
    */
    if (info.offset.y / containerHeight > SNAP_TO_CLOSE_PERCENT) {
      y.set(containerHeight);
    } else {
      y.set(0);
      setDrag(true);
    }
  }

  function renderPortal() {
    return (
      <ScrollLocky>
        <Shade
          style={{ background: shadeBackground }}
          ref={shadeRef}
        >
          <Container
            style={{
              // escape a flickering effect
              y: containerHeight ? y : 4000,
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius
            }}
            ref={containerRef}
          >
            <Top
              drag="y"
              dragMomentum={false}
              dragConstraints={shadeRef}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{
                /**
                 * set to useMotionValue when
                 * you don't want the element
                 * to move but you want to get
                 * the onDrag events to fire
                 * */
                y: useMotionValue(0)
              }}
            >
              <DragIndicator />
            </Top>
            <Inner>
              {children}
            </Inner>
            <Bottom>
              Bottom
            </Bottom>
          </Container>
        </Shade>
      </ScrollLocky>
    );
  }


  return ReactDOM.createPortal(
    renderPortal(),
    document.body
  );
}

export { Props };
export default Drawer;
