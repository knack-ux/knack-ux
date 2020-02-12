import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import { Transition, MotionProps } from 'framer-motion';

import { Circle, SwitchBase } from './styled';

type Modify<T, R> = Omit<T, keyof R> & R;

export type BaseProps = Modify<
  ComponentPropsWithRef<'label'>,
  MotionProps & LayoutProps & SpaceProps
>;

interface Props extends BaseProps {
  id: string
  size?: number,
  checked?: boolean
  onChange: () => void
  inputProps?: ComponentPropsWithRef<'input'>
}

const transition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.2
};

export const Switch = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      size = 16,
      checked = false,
      onChange,
      inputProps,
      ...props
    }: Props,
    ref
  ) => {
    const height = size;
    const width = size * 2;
    const circleSize = size - 4;

    return (
      <SwitchBase
        width={width}
        height={height}
        htmlFor={id}
        transition={transition}
        initial={{
          backgroundColor: 'rgba(193, 199, 208, 1)'
        }}
        animate={(
          checked
            ? { backgroundColor: 'rgba(0, 82, 204, 1)' }
            : { backgroundColor: 'rgba(193, 199, 208, 1)' }
        )}
        {...props}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...inputProps}
        />
        <Circle
          transition={transition}
          size={circleSize}
          initial={{ x: 0 }}
          animate={(
            checked
              ? { x: size }
              : { x: 0 }
          )}
        />
      </SwitchBase>
    );
  }
);


export default Switch;
