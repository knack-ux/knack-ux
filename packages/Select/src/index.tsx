import React, {
  useRef, useReducer, useEffect, useLayoutEffect
} from 'react';
import { Machine, assign, actions } from 'xstate';
import { useMachine } from '@xstate/react';
import {
  WarningText,
  WarningIcon,
  ErrorText,
  ErrorIcon
} from '@knack-ux/input/lib/styled';

import {
  Wrap,
  Button,
  List,
  Option,
  Label,
  ArrowIcon,
  Container
} from './styled';

interface ReducerState {
  currentState: 'open' | 'close'
  currentIndex: number
  selected: string
  options: string[]
  inputRef: React.RefObject<HTMLInputElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
}

function reducer(state: ReducerState, action: any) {
  switch (action.type) {
    case 'OPEN': {
      setImmediate(() => {
        state.listRef.current.focus();
      });
      return {
        ...state,
        currentState: 'open',
        selected: state.selected !== '' ? state.selected : state.options[0],
        currentIndex: state.currentIndex !== -1 ? state.currentIndex : 0
      };
    }
    case 'CLOSE': {
      setImmediate(() => {
        state.inputRef.current.focus();
      });
      return {
        ...state,
        currentState: 'close'
      };
    }
    case 'SELECT':
      setImmediate(() => {
        state.inputRef.current.focus();
      });
      return {
        ...state,
        currentState: 'close',
        currentIndex: action.payload.index,
        selected: action.payload.option
      };
    case 'SELECT_NEXT': {
      const nextIndex = (
        state.currentIndex + 1 > state.options.length - 1
          ? state.currentIndex
          : state.currentIndex + 1
      );
      return {
        ...state,
        currentIndex: nextIndex,
        selected: state.options[nextIndex],
        options: state.options
      };
    }
    case 'SELECT_PREVIOUS': {
      const previousIndex = (
        state.currentIndex === 0
          ? state.currentIndex
          : state.currentIndex - 1
      );
      return {
        ...state,
        currentIndex: previousIndex,
        selected: state.options[previousIndex],
        options: state.options
      };
    }
    case 'SELECT_FIRST': {
      return {
        ...state,
        currentIndex: 0,
        selected: state.options[0]
      };
    }
    case 'SELECT_LAST': {
      const lastIndex = (
        state.options.length - 1
      );
      return {
        ...state,
        currentIndex: lastIndex,
        selected: state.options[lastIndex],
        options: state.options
      };
    }
    default:
      return state;
  }
}

const keyCodes = {
  enter: 13,
  space: 32,
  arrowUp: 38,
  arrowDown: 40,
  tab: 9,
  esc: 27,
  home: 36,
  end: 35
};

interface Props {
  id: string
  label: string
  options: string[]
  warning?: string
  error?: string
  disabled?: boolean
}

function Select({
  id,
  label,
  options,
  warning,
  error
}: Props) {
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, {
    currentState: 'close',
    currentIndex: -1,
    selected: '',
    options,
    listRef,
    inputRef,
  });

  function handleOptionPress(
    event: React.KeyboardEvent<HTMLUListElement>
  ) {
    event.preventDefault();
    switch (event.keyCode) {
      case keyCodes.arrowDown: {
        dispatch({ type: 'SELECT_NEXT' });
        break;
      }
      case keyCodes.arrowUp: {
        dispatch({ type: 'SELECT_PREVIOUS' });
        break;
      }
      case keyCodes.home: {
        dispatch({ type: 'SELECT_FIRST' });
        break;
      }
      case keyCodes.end: {
        dispatch({ type: 'SELECT_LAST' });
        break;
      }
      case keyCodes.enter:
      case keyCodes.esc: {
        dispatch({ type: 'CLOSE' });
        break;
      }
      default: break;
    }
  }

  function handleInputPress(
    event: React.KeyboardEvent<HTMLButtonElement>
  ) {
    switch (event.keyCode) {
      case keyCodes.enter:
      case keyCodes.space:
        dispatch('OPEN');
        break;
      default: break;
    }
  }

  function handleOptionClick(
    option: string,
    index: number
  ) {
    return (
      () => {
        dispatch({
          type: 'SELECT',
          payload: {
            index,
            option
          }
        });
      }
    );
  }

  function renderWarning() {
    return warning && (
      <WarningText>
        Warning
      </WarningText>
    );
  }

  function renderError() {
    return error && (
      <ErrorText>
        Error
      </ErrorText>
    );
  }

  function renderList() {
    const activeOptionId = `${id}-option-${state.selected}`;

    return (
      state.currentState === 'open' && (
        <List
          ref={listRef}
          onKeyDown={handleOptionPress}
          onBlur={() => dispatch({ type: 'CLOSE' })}
          active={state.currentState === 'open'}
          aria-activedescendant={activeOptionId}
          error={error}
          warning={warning}
        >
          {
            state.options.map(
              (option, index) => (
                <Option
                  key={option}
                  id={`${id}-option-${option}`}
                  active={option === state.selected}
                  onClick={handleOptionClick(option, index)}
                >
                  {option}
                </Option>
              )
            )
          }
        </List>
      ));
  }

  const buttonId = id;
  const labelId = `${id}-label`;

  return (
    <Wrap>
      <Label id={labelId}>
        {label}
      </Label>
      <Container>
        <Button
          type="button"
          id={buttonId}
          ref={inputRef}
          active={state.currentState === 'open'}
          onClick={() => dispatch({ type: 'OPEN' })}
          onKeyPress={handleInputPress}
          aria-expanded={state.currentState === 'open'}
          aria-labelledby={`${buttonId} ${labelId}`}
          warning={warning}
          error={error}
        >
          {state.selected}
          <ArrowIcon />
        </Button>
        {/* <WarningIcon /> */}
      </Container>
      {renderWarning()}
      {renderError()}
      {renderList()}
    </Wrap>
  );
}

export default Select;
