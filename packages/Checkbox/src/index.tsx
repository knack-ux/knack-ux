import React, {
  useState,
  HTMLAttributes,
  KeyboardEvent,
  ChangeEvent,
  MouseEvent,
  forwardRef,
  MutableRefObject
} from 'react';

import { Wrap, CheckboxIcon } from './styled';

const variants = {
  initial: {
    border: '2px solid #0052CC',
    background: '#FFFFFF',
    color: '#FFFFFF',
    boxShadow: '0 0 0 0px #FFFFFF'
  },
  focused: {
    boxShadow: '0 0 0 6px #DFE4EA'
  },
  checked: {
    border: '2px solid #0052CC',
    background: '#0052CC',
    color: '#FFFFFF'
  },
  disabledChecked: {
    border: '2px solid #A4B0BE',
    background: '#A4B0BE',
    color: '#FFFFFF'
  },
  disabledNotChecked: {
    border: '2px solid #A4B0BE',
    background: '#FFFFFF',
    color: '#FFFFFF'
  },
  error: {
    border: '2px solid #EB3B5A',
    background: '#FFFFFF',
    color: '#FFFFFF'
  }
};

type ReactDiv = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
>

export interface CheckboxChangeEvent {
  target: { value: boolean }
  preventDefault: ChangeEvent['preventDefault']
  stopPropagation: ChangeEvent['stopPropagation']
  nativeEvent: MouseEvent | KeyboardEvent
}

export interface Props extends ReactDiv {
  label?: string
  checked: boolean
  onChange: (
    event: CheckboxChangeEvent
  ) => void
  disabled?: boolean
  error?: boolean
}

export const Checkbox = forwardRef((
  {
    label,
    checked = false,
    onChange = () => {},
    disabled,
    error,
    ...props
  }: Props,
  ref?: MutableRefObject<HTMLDivElement>
) => {
  const [focused, setFocus] = useState(false);

  const animate = ['initial'];
  if (disabled) {
    animate.push(
      checked
        ? 'disabledChecked'
        : 'disabledNotChecked'
    );
  } else {
    if (focused) animate.push('focused');
    if (error) animate.push('error');
    if (checked) animate.push('checked');
  }

  function handleChange(
    event: MouseEvent | KeyboardEvent
  ) {
    const checkboxChangeEvent: CheckboxChangeEvent = {
      target: { value: !checked },
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation,
      nativeEvent: event
    };
    if (!disabled) {
      onChange(checkboxChangeEvent);
    }
  }

  function handleSpacePress(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      event.preventDefault();
      handleChange(event);
    }
  }

  return (
    <Wrap
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={handleChange}
      onKeyDown={handleSpacePress}
      ref={ref}
      {...props}
    >
      <CheckboxIcon
        initial="initial"
        variants={variants}
        animate={animate}
      />
      {label}
    </Wrap>
  );
});

export default Checkbox;
