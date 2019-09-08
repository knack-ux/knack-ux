import React, { useRef } from 'react';
import { Machine, assign, actions } from 'xstate';
import { useMachine } from '@xstate/react';
import { Styled } from '@knack/input';

import {
  Wrap,
  Button,
  List,
  Option,
  Label,
  ArrowIcon,
  Container
} from './styled';

const {
  WarningText,
  WarningIcon,
  ErrorText,
  ErrorIcon
} = Styled;

const selectMachine = Machine(
  {
    id: 'select',
    initial: 'focused',
    states: {
      focused: {
        on: {
          OPEN: {
            target: 'opened',
            actions: ['focusList']
          }
        }
      },
      opened: {
        onEntry: ['selectFirstIfNotSet'],
        on: {
          CLOSE: {
            target: 'focused',
            actions: ['focusInput']
          },
          SELECT: {
            target: 'focused',
            actions: ['select', 'focusInput']
          },
          SELECT_NEXT: { actions: ['selectNext'] },
          SELECT_PREVIOUS: { actions: ['selectPrevious'] },
          SELECT_FIRST: { actions: ['selectFirst'] },
          SELECT_LAST: { actions: ['selectLast'] }
        }
      },
    },
    context: {
      currentIndex: 0,
      selected: '',
      options: [],
      inputRef: null,
      listRef: null
    }
  },
  {
    actions: {
      focusInput: (context) => {
        setImmediate(() => {
          context.inputRef.current.focus();
        });
      },
      focusList: (context) => {
        setImmediate(() => {
          context.listRef.current.focus();
        });
      },
      select: assign((_, event) => ({
        currentIndex: event.payload.index,
        selected: event.payload.option
      })),
      selectFirst: assign(context => ({
        currentIndex: 0,
        selected: context.options[0]
      })),
      selectFirstIfNotSet: actions.send((context) => {
        if (!context.selected) {
          return 'SELECT_FIRST';
        }
        return '';
      }),
      selectLast: assign((context) => {
        const lastIndex = (
          context.options.length - 1
        );
        return {
          currentIndex: lastIndex,
          selected: context.options[lastIndex],
          options: context.options
        };
      }),
      selectNext: assign((context) => {
        const nextIndex = (
          context.currentIndex + 1 > context.options.length - 1
            ? context.currentIndex
            : context.currentIndex + 1
        );
        return {
          currentIndex: nextIndex,
          selected: context.options[nextIndex],
          options: context.options
        };
      }),
      selectPrevious: assign((context) => {
        const previousIndex = (
          context.currentIndex === 0
            ? context.currentIndex
            : context.currentIndex - 1
        );
        return {
          currentIndex: previousIndex,
          selected: context.options[previousIndex],
          options: context.options
        };
      })
    }
  }
);

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
  const [current, send] = useMachine(
    selectMachine.withContext({
      currentIndex: -1,
      selected: '',
      options,
      listRef,
      inputRef,
    })
  );

  function handleOptionPress(
    event: React.KeyboardEvent<HTMLUListElement>
  ): any {
    switch (event.keyCode) {
      case keyCodes.arrowDown: {
        send('SELECT_NEXT');
        break;
      }
      case keyCodes.arrowUp: {
        send('SELECT_PREVIOUS');
        break;
      }
      case keyCodes.home: {
        send('SELECT_FIRST');
        break;
      }
      case keyCodes.end: {
        send('SELECT_LAST');
        break;
      }
      case keyCodes.enter:
      case keyCodes.space:
      case keyCodes.esc: {
        send('CLOSE');
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
        send('OPEN');
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
        send({
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
    const activeOptionId = `${id}-option-${current.context.selected}`;

    return (
      current.matches('opened') && (
        <List
          ref={listRef}
          onKeyDown={handleOptionPress}
          onBlur={() => send('CLOSE')}
          active={current.matches('opened')}
          aria-activedescendant={activeOptionId}
        >
          {
            current.context.options.map(
              (option, index) => (
                <Option
                  key={option}
                  id={`${id}-option-${option}`}
                  active={option === current.context.selected}
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
          active={current.matches('opened')}
          onClick={() => send('OPEN')}
          onKeyPress={handleInputPress}
          aria-expanded={current.matches('opened')}
          aria-labelledby={`${buttonId} ${labelId}`}
          warning={warning}
          error={error}
        >
          {current.context.selected}
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
