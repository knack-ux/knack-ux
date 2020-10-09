import React, { ComponentPropsWithoutRef } from 'react';
import { DateTime } from 'luxon';

import {
  TimePickerBase,
  Label,
  Select,
  ErrorText
} from './styled';

export type ReactSelect = ComponentPropsWithoutRef<'select'>;

export interface Props {
  id: string
  label: string
  value: string
  error?: string
  disabled?: boolean
  selectProps?: ReactSelect
  onChange: ReactSelect['onChange']
}

export function TimePicker({
  id,
  label,
  value,
  error,
  disabled,
  selectProps,
  onChange
}: Props) {
  function renderOptions() {
    let dt = DateTime.fromObject({
      hour: 23,
      minute: 30,
      millisecond: 0
    });

    return Array(24 * 2).fill('').map(() => {
      dt = dt.plus({ minute: 30 });
      const optionValue = dt.toFormat('HH:mm');
      return (
        <option
          key={`${id}-${optionValue}`}
        >
          {optionValue}
        </option>
      );
    });
  }

  function renderError() {
    return (
      <ErrorText>
        {error}
      </ErrorText>
    );
  }

  return (
    <TimePickerBase>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Select
        id={id}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        {...selectProps}
      >
        {renderOptions()}
      </Select>
      {renderError()}
    </TimePickerBase>
  );
}

export default TimePicker;
