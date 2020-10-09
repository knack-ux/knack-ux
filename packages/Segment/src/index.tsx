import React, {
  useState, useEffect, ComponentPropsWithRef, forwardRef
} from 'react';
import { useAnimation } from 'framer-motion';
import { LayoutProps, BorderProps, } from 'styled-system';

import {
  Indicator,
  Option,
  SegmentBase
} from './styled';

interface IOption {
  label: string
  value: string
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type BaseProps = Modify<
  ComponentPropsWithRef<'div'>,
  LayoutProps & BorderProps
>

export interface Props extends BaseProps {
  id: string
  value: string
  options: IOption[]
  onChange: ComponentPropsWithRef<'input'>['onChange']
  inputProps?: ComponentPropsWithRef<'input'>
  height?: number
}

export const Segment = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      value,
      options,
      onChange,
      height = 32,
      inputProps,
      ...props
    },
    ref
  ) => {
    const indicatorAnimation = useAnimation();
    const [optionRefs, setRefs] = useState({});

    const borderRadius = `${height / 2}px`;
    const paddingX = `${height / 2}px`;

    useEffect(() => {
      if (optionRefs[value]) {
        indicatorAnimation.start({
          width: optionRefs[value].offsetWidth,
          x: optionRefs[value].offsetLeft - 1
        });
      }
    }, [optionRefs, value]);

    function handleRefAssign(optionValue: string) {
      return (optionRef) => {
        setRefs((data) => (
          { ...data, [optionValue]: optionRef }
        ));
      };
    }

    function renderOptions() {
      return options.map((option) => {
        const isSelected = option.value === value;

        return (
          <Option
            key={option.value}
            aria-selected={isSelected}
            animate={
            isSelected
              ? { color: '#FFFFFF' }
              : { color: '#000000' }
          }
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: 0.2
            }}
            paddingX={paddingX}
            ref={handleRefAssign(option.value)}
          >
            <input
              name={id}
              type="radio"
              value={option.value}
              onChange={onChange}
              {...inputProps}
            />
            {option.label}
          </Option>
        );
      });
    }

    return (
      <SegmentBase
        height={height}
        borderRadius={borderRadius}
        ref={ref}
        {...props}
      >
        <Indicator
          animate={indicatorAnimation}
          borderRadius={borderRadius}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.2
          }}
        />
        {renderOptions()}
      </SegmentBase>
    );
  }
);

export default Segment;
