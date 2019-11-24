import React, {
  useState, forwardRef, HTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import ErrorSVG from './assets/error.svg';

interface Option {
  id: string
  key: string
  value: any
}

type ReactUL = Omit<
  HTMLAttributes<HTMLUListElement>,
  'onChange'
>

export interface Props extends ReactUL {
  id: string
  label: string
  options: Option[]
  selected: Option | null
  onChange: (selected: Option) => void
  direction?: 'horizontal' | 'vertical'
  error?: string
}

const variants = {
  selected: {
    border: '6px solid #5F66D7'
  },
  focused: {
    boxShadow: '0 0 0 8px rgba(241, 242, 246, 1)',
    border: '6px solid #C1C7D0'
  },
  focusedSelected: {
    border: '6px solid #5F66D7'
  },
  nonSelected: {
    boxShadow: '0 0 0 0px rgba(255, 255, 255, 0)',
    border: '2px solid #CAD3C8',
  }
};

const keyCodes = {
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
  space: 32
};

export const Radio = forwardRef<HTMLUListElement, Props>((
  {
    id,
    label,
    options,
    selected,
    direction = 'vertical',
    onChange,
    error,
    className,
    style,
    children,
    ...props
  }: Props,
  ref
) => {
  const [activeDescendant, setActive] = useState('');

  const selectedIndex = selected && options.map(
    (option) => option.id
  ).indexOf(selected.id);

  function handleKeyPress(
    event: React.KeyboardEvent
  ) {
    switch (event.keyCode) {
      case keyCodes.arrowLeft:
      case keyCodes.arrowUp: {
        event.preventDefault();

        const previousIndex = (
          selectedIndex !== 0
            ? selectedIndex - 1
            : options.length - 1
        );
        setActive(options[previousIndex].id);
        onChange(options[previousIndex]);
        break;
      }
      case keyCodes.arrowRight:
      case keyCodes.arrowDown: {
        event.preventDefault();

        const previousIndex = (
          selectedIndex !== options.length - 1
            ? selectedIndex + 1
            : 0
        );
        setActive(options[previousIndex].id);
        onChange(options[previousIndex]);
        break;
      }
      case keyCodes.space: {
        event.preventDefault();
        if (!selectedIndex) {
          onChange(options[0]);
        }
        break;
      }
      default: break;
    }
  }

  function handleContainerFocus() {
    if (!activeDescendant) {
      setActive(options[0].id);
    }
  }

  function handleOptionClick(option: Option) {
    return () => {
      onChange(option);
      setActive(option.id);
    };
  }

  function renderOptions() {
    return options.map((option) => {
      const isSelected = selected && selected.id === option.id;
      const activeVariant = option.id === activeDescendant;

      let state = 'nonSelected';
      if (isSelected && activeVariant) state = 'focusedSelected';
      else if (isSelected) state = 'selected';
      else if (activeVariant) state = 'focused';

      return (
        <Option
          role="radio"
          aria-checked={isSelected}
          id={option.id}
          key={option.id}
          onClick={handleOptionClick(option)}
        >
          <Circle
            variants={variants}
            initial="nonSelected"
            animate={state}
            transition={{
              duration: 0.1
            }}
          />
          {option.key}
        </Option>
      );
    });
  }

  const errorId = `radio-error-${id}`;

  function renderError() {
    return error && (
      <Error id={errorId}>
        <ErrorSVG aria-label="Error" />
        {error}
      </Error>
    );
  }

  const labelId = `radio-label-${id}`;

  return (
    <Wrap
      className={className}
      style={style}
    >
      <h3 id={labelId}>
        {label}
      </h3>
      <Container
        tabIndex={0}
        role="radiogroup"
        aria-labelledby={`${labelId} ${errorId}`}
        aria-activedescendant={activeDescendant}
        onFocus={handleContainerFocus}
        onKeyDown={handleKeyPress}
        direction={direction}
        error={error}
        ref={ref}
        {...props}
      >
        {renderOptions()}
      </Container>
      {renderError()}
    </Wrap>
  );
});

const Error = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;
  
  color: #DD215A;
  font-size: 16px;

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    fill: #DD215A;
  }
`;

const Circle = styled(motion.div)`
  width: 24px;
  height: 24px;
  outline: none;

  border-radius: 50%;
  border: 2px solid #CAD3C8;
  box-sizing: border-box;
  background: white;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > ${Circle} {
    margin-right: 8px;
  }
`;

type ContainerProps = Pick<Props, 'direction' | 'error'>

const Container = styled.ul<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  outline: none;

  & > ${Option}:nth-of-type(n + 2) {
    margin-top: 8px;
  }

  ${({ direction }) => (
    direction === 'horizontal' && css`
      flex-direction: row;
      & > ${Option}:nth-of-type(n + 2) {
        margin-left: 24px;
        margin-top: 0;
      }
    `
  )}

  ${({ error }) => (
    error && css`
      padding: 8px;
      border: 3px solid #E3668C;
      border-radius: 3px;
    `
  )}
`;


const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;

  font-family: "Open Sans";

  & > h3 {
    margin: 16px 0;
  }
`;

export default Radio;
