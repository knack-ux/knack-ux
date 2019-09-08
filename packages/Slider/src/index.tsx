import React, { useRef, useState, useEffect } from 'react';
import {
  useMotionValue,
  transform
} from 'framer-motion';

import {
  Pointer,
  SelectedLine,
  UnselectedLine,
  Thumb,
  Wrap
} from './styled';

function round(
  number: number,
  increment: number,
  offset: number = 0
) {
  return Math.round(
    (number - offset) / increment
  ) * increment + offset;
}

const tabHoverStyle = {
  boxShadow: '0 0 3pt 3pt #00ADAD',
  border: '3px solid #FFFFFF'
};

const keyCodes = {
  arrowUp: 38,
  arrowDown: 40,
  arrowLeft: 37,
  arrowRight: 39,
  home: 36,
  end: 35,
  pageUp: 33,
  pageDown: 34
};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type DivProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
>

interface Props extends DivProps {
  label: string
  min?: number
  max?: number
  initial?: number
  step?: number
  pointer?: boolean
  children: (currentValue: number) => React.ReactNode
  onChange: (value: number) => void
}

function Slider({
  label,
  min = 0,
  max = 100,
  initial = min,
  step = 1,
  pointer,
  onChange,
  children,
  ...props
}: Props) {
  const [width, setWidth] = useState(0);
  const [value, setValue] = useState(initial);
  const xPixels = useMotionValue(0);
  const wrapRef = useRef(null);

  const convertPixelsToValue = transform(
    [0, width], [min, max]
  );
  const convertValueToPixels = transform(
    [min, max], [0, width]
  );

  function getRoundedXValue() {
    const currentXValue = convertPixelsToValue(
      xPixels.get()
    );
    const roundedXValue = round(
      currentXValue,
      step
    );

    return roundedXValue;
  }

  function setInitialX() {
    const initialProcent = (initial - min) / (max - min);
    const initialX = width * initialProcent;
    xPixels.set(initialX);
  }

  function handleChange() {
    setValue(getRoundedXValue());
    onChange(getRoundedXValue());
  }


  function handleThumpKeyPress(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    let newValue: number = getRoundedXValue();
    switch (event.keyCode) {
      case keyCodes.arrowUp:
      case keyCodes.arrowRight: {
        newValue += step;
        break;
      }
      case keyCodes.arrowDown:
      case keyCodes.arrowLeft: {
        newValue -= step;
        break;
      }
      case keyCodes.home: {
        newValue = min;
        break;
      }
      case keyCodes.end: {
        newValue = max;
        break;
      }
      case keyCodes.pageUp: {
        newValue += step * 3;
        break;
      }
      case keyCodes.pageDown: {
        newValue -= step * 3;
        break;
      }
      default: {
        break;
      }
    }
    xPixels.set(
      convertValueToPixels(
        newValue
      )
    );
    handleChange();
  }

  function handleDrag() {
    const roundedXValue = getRoundedXValue();
    xPixels.set(
      convertValueToPixels(
        roundedXValue
      )
    );
    /**
     * we don't need to re-render
     * the component when there
     * isn't a direct use of
     * the value prop. This
     * happens when the pointer
     * prop is set to true or
     * children as a function
     * is defined
     */
    if (pointer || children) {
      setValue(roundedXValue);
    }
  }

  // get the height of the wrap
  useEffect(() => {
    setWidth(
      wrapRef.current.offsetWidth - 16
    );
  }, []);

  useEffect(() => {
    setInitialX();
  }, [width]);

  function renderPointer() {
    return pointer && (
      <Pointer value={value} />
    );
  }

  function renderChildren() {
    return children && (
      children(value)
    );
  }

  return (
    <Wrap ref={wrapRef} {...props}>
      <UnselectedLine />
      <Thumb
        drag="x"
        dragConstraints={wrapRef}
        dragElastic={false}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragEnd={handleChange}
        style={{ x: xPixels }}
        whileHover={tabHoverStyle}
        whileTap={tabHoverStyle}
        onKeyDown={handleThumpKeyPress}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label}
        tabIndex={0}
      >
        {renderPointer()}
        {renderChildren()}
      </Thumb>
      <SelectedLine
        style={{ width: xPixels }}
      />
    </Wrap>
  );
}

export { Props };
export * from './styled';
export default Slider;
