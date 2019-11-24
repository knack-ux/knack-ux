import React, {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent
} from 'react';
import _remove from 'lodash.remove';
import Checkbox, { CheckboxChangeEvent } from '@knack-ux/checkbox';

import { Container, Wrap } from './styled';

interface Option {
  key: string
  value: string
}

export interface CheckboxGroupChangeEvent {
  target: { value: string[] }
  preventDefault: ChangeEvent['preventDefault']
  stopPropagation: ChangeEvent['stopPropagation']
  nativeEvent: MouseEvent | KeyboardEvent
}

interface Props {
  id: string
  label: string
  options: Option[]
  checked: Option['value'][]
  onChange: (event: CheckboxGroupChangeEvent) => {}
}

function CheckboxGroup({
  id,
  label,
  options,
  checked,
  onChange
}: Props) {
  const labelId = `checkbox-group-${id}-label`;

  function handleChange(value: Option['value']) {
    return (event: CheckboxChangeEvent) => {
      const newValue = checked.includes(value)
        ? _remove(checked, (entry) => entry !== value) as Props['checked']
        : [...checked, value];
      const checkboxGroupChangeEvent = {
        ...event,
        target: { value: newValue }
      };
      onChange(checkboxGroupChangeEvent);
    };
  }


  function renderLabel() {
    return label && (
      <h3 id={labelId}>{label}</h3>
    );
  }

  function renderOptions() {
    return options.map((option) => (
      <Checkbox
        key={option.value}
        label={option.key}
        checked={checked.includes(option.value)}
        onChange={handleChange(option.value)}
      />
    ));
  }

  return (
    <Wrap>
      {renderLabel()}
      <Container
        role="group"
        aria-labelledby={labelId}
      >
        {renderOptions()}
      </Container>
    </Wrap>
  );
}


export default CheckboxGroup;
